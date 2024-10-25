import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
    name: "options",
    initialState: {
        showOptions: false 
    },
    reducers: {
        toggleOptionBar: (state , action) => {
            state.showOptions = !state.showOptions;
        },

        closeOptionBar: (state) => {
            state.showOptions = false
        }
    }
})


export const {toggleOptionBar , closeOptionBar} = optionSlice.actions;
export default optionSlice.reducer;