import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

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
     console.log(currentUser)
      setLoading(false);
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

  const authInfo = {
    user,
    setLoading,
    createUser,
    loggedIn,
    signInWithGoogle
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
