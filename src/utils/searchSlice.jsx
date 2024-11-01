import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState: {
        showSearch : false,
    },
    reducers: {
        toggleSearch : (state) => {
            state.showSearch = !state.showSearch;
        },
        removeSearch : (state) => {
            state.showSearch = false
        }
    }
});


export const {toggleSearch , removeSearch} = searchSlice.actions;
export default searchSlice.reducer;