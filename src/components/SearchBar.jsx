import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { removeSearch } from "../utils/searchSlice";
import client from "../utils/openai";

const SearchBar = () => {
  const lang = useSelector((store) => store.language.showLanguage);
  const searchText = useRef(null);
  const dispatch = useDispatch()
  
  const handleSearch = async() => {
    console.log(searchText.current.value);

    const searchQuery = "Act as a movie recommendation system and suggest some movies for the query"+ searchText.current.value+". Only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Golmaal, Krish, ABCD"

    const searchResults = await client.chat.completions.create({
        messages: [{ role: 'user', content: searchQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(searchResults.choices);
      

  }

  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
        
      >
        <input
        ref={searchText}
          type="text"
          placeholder={language[lang].searchPlaceholder}
          className="col-span-9 p-4 m-4"
        />
        <button className="col-span-3 bg-red-600 text-white px-4 py-2 m-4 rounded-lg" onClick={handleSearch}>
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
