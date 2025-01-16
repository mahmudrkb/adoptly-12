import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.confiq";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

     const logOutUser = () => {
      setLoading(true);
      return signOut(auth);
    };


    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

 

  //   const updateUser = (name, photo) => {
  //     setLoading(true);
  //     return updateProfile(auth.currentUser, {
  //       displayName: name,
  //       photoURL: photo,
  //     });
  //   };

  const info = {
    user,
    loading,
    setUser,
    createUser,
    signinUser,
    logOutUser,
    googleSignIn,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
