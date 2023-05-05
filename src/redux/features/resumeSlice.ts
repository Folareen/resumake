import { createSlice } from '@reduxjs/toolkit'

type ResumeState = {
    showToolbar: boolean,
    currentEl: HTMLElement | null,
    editMode: boolean,
    userData: any,
    // resumeContent: 
}

const initialState: ResumeState = {
    showToolbar: false,
    currentEl: null,
    editMode: false,
    userData: null
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
            state.showToolbar = true
        },
        previewResume: (state) => {
            state.editMode = false
            state.showToolbar = false
            state.currentEl = null
        },
        submitUserData: (state, action) => {
            state.userData = action.payload
        },
        clearUserData: (state) => {
            state.userData = null
        }
    }
})

export const { showToolbar, hideToolbar, editResume, previewResume, submitUserData, clearUserData } = resumeSlice.actions
export default resumeSlice.reducer