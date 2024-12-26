import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Auth state capture
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
     console.log('state captured',currentUser?.email)

     if(currentUser?.email){
      const user= {email:currentUser?.email}
      

      axios.post('http://localhost:3000/jwt',user, {
        withCredentials:true
      })
      .then(res=>{console.log(res.data)
        setLoading(false)
      })
     }

     else{
      axios.post('http://localhost:3000/logout',{}, {
        withCredentials:true
      })
      .then(res=>{console.log('logout clean token', res.data)
        setLoading(false)
      } )
     }

    });


    // Unsubscribe on cleanup
    return () => unSubscribe();
  }, []);

  // user login
  const loggedIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  //login with google
  const signInWithGoogle= ()=>{
    const provider= new GoogleAuthProvider();
    setLoading(true)
    return signInWithPopup(auth, provider )
  }

  //login with facebook
  const signInWithFacebook = ()=>{
    const provider = new FacebookAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const authInfo = {
    user,
    setLoading,
    createUser,
    loggedIn,
    signInWithGoogle,
    signInWithFacebook
  }

  if (loading) {
    return <div className='flex justify-center items-center text-4xl'><span className="loading loading-spinner text-success"></span></div>; // Or your custom loading component
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
