import React, { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import Header from './Header'
import { closeOptionBar } from '../utils/optionSlice'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, displayName , email , photoURL} = user;
               dispatch(addUser({uid , displayName , email , photoURL}));
               navigate('/browse')
               dispatch(closeOptionBar())
              // ...
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate('/')
              dispatch(closeOptionBar())
              
              // ...
            }
          });
    } , [])

  return (
    <div>
        <Header />
        <Outlet />
    </div>
  );
}

export default Body