import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Search/searchSlice";
export const store = configureStore({
    reducer: {
        search: searchReducer,
    }
});
