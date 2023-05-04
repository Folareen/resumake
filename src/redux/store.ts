import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import toolbarReducer from "./features/toolbarSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        toolbar: toolbarReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store;