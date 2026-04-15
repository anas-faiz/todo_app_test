import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./TodoDataSlice"

export const store = configureStore({
    reducer: {
        dataSlice : dataSliceReducer 
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;