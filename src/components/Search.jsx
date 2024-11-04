import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import { LANDING_BG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removeSearch } from "../utils/searchSlice";

const Search = () => {
    const search = useSelector(store => store.search.showSearch)
    
  return (
    <div className="z-40 absolute w-full" >
      <SearchBar />
      <MovieSuggestions /> 
    </div>
  );
};

export default Search;
