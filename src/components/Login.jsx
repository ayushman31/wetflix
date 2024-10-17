import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true);
    const [credError , setCredError] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =  () => {
        //validate the form data
        console.log(email.current.value);
        console.log(password.current.value);
        
        const message = checkValidData(email.current.value,password.current.value);
        console.log(message);
        setCredError(message);
        
    }
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <div >
      <Header />
      <div >
        <img className="absolute brightness-50  w-full " src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
        alt="backgroud-image" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black bg-opacity-70 m-auto right-0 left-0 top-0 my-40">
      <h1 className="font-semibold text-white text-4xl ml-2 mb-8">{isSignIn ? 'Sign In': 'Sign Up'}</h1>

        {!isSignIn && <input className="p-4 m-2 w-full bg-slate-50 bg-opacity-20 text-white rounded-md" type="text" placeholder="Enter full name" />}
        <input ref={email} className="p-4 m-2 w-full bg-slate-50 bg-opacity-20 text-white rounded-md" type="text" placeholder="Email or mobile number" />
        <input ref={password} className="p-4 m-2 w-full bg-slate-50 bg-opacity-20 text-white rounded-md" type="password" placeholder="Password" />
        {credError && <p className="p-2 m-2 text-red-600">Enter valid email and password.</p>}
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
