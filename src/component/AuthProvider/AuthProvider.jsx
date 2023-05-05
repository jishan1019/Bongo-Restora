import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

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

    const authInfo = { data, registerUser, user, logOut, loginUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;