import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const registerGoogle = (auth, googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const registerGitHub = (auth, gitProvider) => {
        return signInWithPopup(auth, gitProvider);
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/allChefData')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const authInfo = { data, registerUser, registerGoogle, user, logOut, loginUser, googleProvider, auth, registerGitHub, gitProvider };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;