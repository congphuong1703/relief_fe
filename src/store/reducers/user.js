import {createSlice} from '@reduxjs/toolkit'

import {signIn} from '../actions/user'
import {useSelector} from 'react-redux'
import {useAppDispatch} from '../index'
import {LANGUAGE_TYPE} from "../../constants";

const initialState = {
    user: undefined,
    userToken: undefined,
    isLoggedIn: false,
    languageType: LANGUAGE_TYPE.VI
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.userToken = action.payload
            state.isLoggedIn = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            signIn.fulfilled,
            (state, action) => {
                state.user = action.payload.user
                state.userToken = action.payload.token
                state.isLoggedIn = true
            }
        )
        builder.addCase(signIn.rejected, (state, action) => {
            state.apiError = action.payload
        })
    }
})
export const useUserState = () => {
    const userState = useSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const userActions = {
        signIn: (params) => dispatch(signIn(params))
    }

    return [userState, userActions]
}
export default userSlice;
