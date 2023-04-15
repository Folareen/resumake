import { createSlice } from '@reduxjs/toolkit'

type authStateType = {
    user: any
}

const initialState: authStateType = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer