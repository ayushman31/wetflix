import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }


  return (
    <div className='flex absolute justify-between w-full'>
        <img className='z-10  w-44 p-2 m-32 h-44 -mt-8 ' src="/netflix.png" alt="" />

        {user && <div className='m-10 flex' onClick={handleSignOut}>
          <img src={user.photoURL}></img>
          <button>Signout</button>
        </div>}
    </div>
  )
}

export default Header