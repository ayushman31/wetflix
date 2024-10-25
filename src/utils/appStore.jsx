import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import optionSlice from "./optionSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        options: optionSlice
    }
})

export default appStore;