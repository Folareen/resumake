import { createSlice } from '@reduxjs/toolkit'

type ResumeState = {
    showToolbar: boolean,
    currentEl: HTMLElement | null,
    editMode: boolean
}

const initialState: ResumeState = {
    showToolbar: false,
    currentEl: null,
    editMode: false
}

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        showToolbar: (state, action) => {
            state.showToolbar = true
            state.currentEl = action.payload
        },
        hideToolbar: (state) => {
            state.showToolbar = false
            state.currentEl = null
        },
        editResume: (state) => {
            state.editMode = true
        },
        previewResume: (state) => {
            state.editMode = false
        }
    }
})

export const { showToolbar, hideToolbar, editResume, previewResume } = resumeSlice.actions
export default resumeSlice.reducer