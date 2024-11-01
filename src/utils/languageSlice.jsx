import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        showLanguage : "en",
    },
    reducers : {
        changeLanguage : (state, action) => {
            state.showLanguage = action.payload;
        }
    }
})


export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;