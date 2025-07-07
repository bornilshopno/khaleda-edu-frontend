import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { app } from '../shared/firebase_auth';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    }

    const logOut=()=>{
        console.log("LOG OUT clicked")
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },
        [auth])
    const AuthInfo = { auth, createUser, loginUser, googleSignIn, logOut, user, setUser, loading, setLoading }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;