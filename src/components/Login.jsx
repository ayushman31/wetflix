import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LANDING_BG } from "../utils/constants";

const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true);
    const [credError , setCredError] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick =  () => {
        //validate the form data
        console.log(email.current.value);
        console.log(password.current.value);
        
        const message = checkValidData(email.current.value,password.current.value);
        console.log(message);
        setCredError(message);
        if(message) return;

        if(!isSignIn){
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;

              updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/126311398?v=4"
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              console.log(user);
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log((errorCode + '::' + errorMessage));
              setCredError(errorMessage)
              // ..
            });;
        } else{
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode+ '::' + errorMessage);
                setCredError(errorCode)
            });
        }
        
    }
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <div >
      <Header />
      <div >
        <img className="absolute brightness-50  w-full " src={LANDING_BG}
        alt="backgroud-image" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black bg-opacity-70 m-auto right-0 left-0 top-0 my-40">
      <h1 className="font-semibold text-white text-4xl ml-2 mb-8">{isSignIn ? 'Sign In': 'Sign Up'}</h1>

        {!isSignIn && <input ref={name} className="p-4 m-2 w-full bg-slate-50 bg-opacity-20 text-white rounded-md" type="text" placeholder="Enter full name" />}
        <input ref={email} className="p-4 m-2 w-full bg-slate-50 bg-opacity-20 text-white rounded-md" type="text" placeholder="Email or mobile number" />
        <input ref={password} className="p-4 m-2 w-full bg-slate-50 bg-opacity-20 text-white rounded-md" type="password" placeholder="Password" />
        {credError && <p className="p-2 m-2 text-red-600">{credError}</p>}
        <button className="p-2 m-2 mt-6 text-white bg-red-600 w-full rounded-md" onClick={handleButtonClick}>{isSignIn ? 'Sign In': 'Sign Up'}</button>
        {isSignIn ? (<div className="mt-6 ml-2">
        <span className="text-gray-50">New to Netflix ?  </span>
        <span className="text-white font-bold cursor-pointer hover:underline " onClick={toggleSignIn}>Sign up Now.</span>
        </div> ):( <div className="mt-6 ml-2">
        <span className="text-gray-50">Already a User ?  </span>
        <span className="text-white font-bold cursor-pointer hover:underline " onClick={toggleSignIn}>Sign in Now.</span>
        </div>) }
      </form>
    </div>
  );
};

export default Login;
