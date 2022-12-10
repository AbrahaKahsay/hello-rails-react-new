import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetings/greetingsSlice";

export default configureStore({
    reducer: {
        greetings: greetingReducer
    },
})