import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Handle user authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user on auth state change
      setLoading(false); // Stop loading once auth state is determined
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null); // Clear user data on sign out
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error during logout:', error);
        setLoading(false);
      });
  };

  const userInfo = {
    user,
    loading,
    createUser,
    userLogin: signInUser,
    logout, // Add logout function to context
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
