import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice.js";

export default configureStore({
    reducer: {
        auth: authReducer,
    }
})