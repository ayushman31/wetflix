import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { toggleOptionBar } from '../utils/optionSlice';

const OptionsBar = () => {
    const dispatch = useDispatch();
    const showOptionsBar = useSelector(store => store.options.showOptions);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            navigate("/");
            
          })
          .catch((error) => {
            // An error happened.
            navigate("/error");
          });
      };



    if(!showOptionsBar) return null
  return (
    <div className='bg-black bg-opacity-80 ml-0 text-white'>
        <div className='m-10 hover:text-red-600 cursor-default'>Liked Shows</div>
        <div onClick={handleSignOut} className='m-10 hover:text-red-600 cursor-default'>Signout</div>
    </div>
  )
}

export default OptionsBar