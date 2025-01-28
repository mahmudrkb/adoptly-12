import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.confiq";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import useAxiosPublic from "../hooks/useAxiosPublic";
const githubProvider = new GithubAuthProvider();
const axiosPublic =useAxiosPublic()

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

  const githubSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const info = {
    user,
    loading,
    setUser,
    createUser,
    signinUser,
    logOutUser,
    googleSignIn,
    githubSignin,
    updateUserProfile,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
        // get token
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
