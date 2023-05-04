import { createSlice } from '@reduxjs/toolkit'

type toolbarState = {
    show: boolean,
    currentEl: HTMLElement | null
}

const initialState: toolbarState = {
    show: false,
    currentEl: null
}

const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        showToolbar: (state, action) => {
            state.show = true
            state.currentEl = action.payload
        },
        hideToolbar: (state) => {
            state.show = false
            state.currentEl = null
        }
    }
})

export const { showToolbar, hideToolbar } = toolbarSlice.actions
export default toolbarSlice.reducer