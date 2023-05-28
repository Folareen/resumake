import { createSlice } from '@reduxjs/toolkit'

type authStateType = {
    user: any,
    loading: boolean,
}

const initialState: authStateType = {
    user: null,
    loading: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload,
            state.loading = false
        }
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer