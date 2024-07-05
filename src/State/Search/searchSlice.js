import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: ""
};
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const { setSearchValue } = searchSlice.actions;
// selector
export const selectSearchValue = (state) => state.search.value;
export default searchSlice.reducer;
