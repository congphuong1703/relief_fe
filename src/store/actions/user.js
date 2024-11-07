import { createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../../controllers/user";

export const signIn = createAsyncThunk(
    'user/signIn',
    async (params, { rejectWithValue }) => {
        const userApi = new UserApi();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const res = await userApi.signIn(params);

        if (res.status === 'success') {
            return Promise.resolve({
                user: res.result.data.user,
                token: res.result.data.token,
            });
        }
        return rejectWithValue(res.errors);
    },
)