import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

   const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
   }
   const signUser =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logOutUser =()=>{
        signOut(auth)
   }

   const provider = new GoogleAuthProvider();
   const googleSignIn = () =>{
    setLoading(true);
    signInWithPopup(auth, provider)
   };

   useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        console.log('observer', currentUser);
        setLoading(false);
    });

    return ()=>{
        unSubscribe();
    }

   }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        googleSignIn,
        signUser,
        logOutUser,




    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;