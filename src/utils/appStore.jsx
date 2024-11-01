import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import optionSlice from "./optionSlice";
import searchSlice from "./searchSlice";
import languageSlice from "./languageSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        options: optionSlice,
        search: searchSlice,
        language: languageSlice,
    }
})

export default appStore;