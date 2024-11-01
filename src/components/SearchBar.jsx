import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {

    const lang = useSelector(store => store.language.showLanguage)

  return (
    <div className="p-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          placeholder={language[lang].searchPlaceholder}
          className="col-span-9 p-4 m-4"
        />
        <button className="col-span-3 bg-red-600 text-white px-4 py-2 m-4 rounded-lg">{language[lang].search}</button>
      </form>
    </div>
  );
};

export default SearchBar;
