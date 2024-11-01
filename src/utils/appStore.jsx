import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import optionSlice from "./optionSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        options: optionSlice,
        search: searchSlice
    }
})

export default appStore;