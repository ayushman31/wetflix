import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOptionBar } from "../utils/optionSlice";
import OptionsBar from "./OptionsBar";
import { toggleSearch } from "../utils/searchSlice";
import language from "../utils/languageConstants";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const lang = useSelector(store => store.language.showLanguage)

  const toggleOptions = () => {
    dispatch(toggleOptionBar());
  };

  const toggleSearchHandler = () => {
    dispatch(toggleSearch());
  };

  const toggleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div
      className={
        "z-40 flex absolute justify-between  w-full bg-gradient-to-b from-black" +
        (user ? "mt-40" : "")
      }
    >
      <img className="  w-44 p-2  m-32 h-44 -mt-8 " src="/netflix.png" alt="" />

      {user && (
        <div className="">
          

          <div className="flex items-center p-2 h-16 m-6 mb-0 rounded-md cursor-pointer">
          <select className="h-4/5 bg-transparent text-white m-2 border-none rounded-lg" onChange={toggleLanguage}>
            {Object.keys(language).map((key) => (
              <option
                key={language[key].identifier}
                value={language[key].identifier}
                className="text-black"
              >
                {language[key].name}
              </option>
            ))}
          </select>
            <button
              className="text-lg font-medium bg-red-700 text-white p-2 hover:bg-red-600 rounded-lg"
              onClick={toggleSearchHandler}
              
            >
              {language[lang].search}
            </button>
            <div onClick={toggleOptions}>
              <img
                src={user.photoURL}
                className="h-12 w-12 rounded-full mx-4"
                alt="User"
              />
            </div>
            <button className="text-lg font-medium  p-2 rounded-lg text-white ">
              {language[lang].welcome}, {user?.displayName?.split(" ")[0]}
            </button>
          </div>
          <div className="flex justify-center mt-0 w-full ">
            <OptionsBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
