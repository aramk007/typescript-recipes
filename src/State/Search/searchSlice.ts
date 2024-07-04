import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: ""
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setSearchValue } = searchSlice.actions;
// selector
export const selectSearchValue = (state: RootState) => state.search.value;
export default searchSlice.reducer;
