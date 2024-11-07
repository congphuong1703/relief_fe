import CamelCaseConverter from "../convert";

let isFetching = false;
// Array of axios instances that are waiting for a token to be refreshed
let subscribers = [];

function setupAxiosInterceptors(
    userSlice,
    axios,
    dispatch,
    store,
) {
    setupAuthorizationInterceptor(userSlice, axios, dispatch, store);
    setupRefreshTokenInterceptor(userSlice, axios, dispatch, store);
}

// Set user token in all requests automatically
function setupAuthorizationInterceptor(
    userSlice,
    http,
    dispatch,
    store,
) {
    http.interceptors.request.use(async (config) => {
        const nConfig = config;
        const state = store.getState();
        const { userToken } = state.user;
        if (userToken) {
            nConfig.headers.Authorization = getAuthHeader(userToken);
        }
        return nConfig;
    });
    // Handle 403 Forbidden authorization errors
    http.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const { status } = error.response;
            if (status === 403) {
                // Logout and redirect to login page
                logoutUser(userSlice, dispatch);
            }
            return Promise.reject(error);
        },
    );
}

function onRefreshed(token) {
    subscribers.map((cb) => cb(token));
    subscribers = [];
}

function subscribeTokenRefresh(cb) {
    subscribers.push(cb);
}

async function fetchNewToken(
    userSlice,
    http,
    dispatch,
    store,
) {
    isFetching = true;
    try {
        const state = store.getState();
        const { userToken } = state.user;
        const { refreshToken } = userToken;
        // Succeeded in refreshing token
        const token = await refreshAccessToken(userSlice, http, refreshToken);
        await dispatch(userSlice.actions.setToken(token));
        onRefreshed(token);
    } catch (err) {
        // Failed to refresh token
        logoutUser(userSlice, dispatch);
    } finally {
        isFetching = false;
    }
}

// Handle oauth refresh tokens.
// If a request fails with a 401 we try to refresh the user's token.
// If it still fails we fail like usual.
function setupRefreshTokenInterceptor(
    userSlice,
    http,
    dispatch,
    userToken,
) {
    http.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
            const { status } = error.response;
            if (status === 401) {
                // First request that triggers a 401 error will start the refresh token flow.
                if (!isFetching) {
                    fetchNewToken(userSlice, http, dispatch, userToken);
                }

                // Subscribe so that we can send the request when the token is refreshed
                return new Promise((resolve) => {
                    subscribeTokenRefresh((token) => {
                        originalRequest.headers.Authorization = getAuthHeader(token);
                        resolve(http(originalRequest));
                    });
                });
            }
            return Promise.reject(error);
        },
    );
}

// Refresh a user's accessToken using their refreshToken
async function refreshAccessToken(
    userSlice,
    http,
    refreshToken,
) {
    try {
        const res = await http.post('oauth/token', {
            grant_type: 'refresh_token',
            client_id: process.env.REACT_APP_API,
            refresh_token: refreshToken,
        });
        const parsedData = snakeToCamel(res.data);
        const { token } = parsedData.data;
        return Promise.resolve(token);
    } catch (err) {
        return Promise.reject(err);
    }
}

// Convert snake_case to camelCase
function snakeToCamel(object) {
    return CamelCaseConverter.convertKeys('camel', object);
}

// Get the auth header required for authenticated requests based on the userToken.
// If it's expired we refresh it using the refreshToken.
function getAuthHeader(userToken) {
    const { tokenType, accessToken } = userToken;
    return `${tokenType || 'Bearer'} ${accessToken}`;
}

// Logout the user in Redux and navigate to "Auth" flow
function logoutUser(userSlice, dispatch) {
    dispatch(userSlice.actions.signOut());
}

export default setupAxiosInterceptors;
