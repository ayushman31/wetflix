import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOptionBar } from "../utils/optionSlice";
import OptionsBar from "./OptionsBar";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
 
  const toggleOptions = () => {
    dispatch(toggleOptionBar());
  };

 

  return (
    <div
      className={
        "z-40 flex absolute justify-between text-red-600 w-full bg-gradient-to-b from-black" +
        (user ? "mt-40" : "")
      }
    >
      <img className="  w-44 p-2  m-32 h-44 -mt-8 " src="/netflix.png" alt="" />

      {user && (
        <div>
        <div className="flex  items-center p-2 h-16 m-6 mb-0 rounded-md cursor-pointer" onClick={toggleOptions}>
          <div>
            <img src={user.photoURL} className="h-12 w-12 rounded-full mr-4" alt="User" />
          </div>
          <button className="text-lg font-medium">{user?.displayName?.split(" ")[0]}</button>
        </div>
        <div className="flex justify-center mt-0 w-full">
          <OptionsBar />
        </div>
      </div>
      
      )}
    </div>
  );
};

export default Header;
