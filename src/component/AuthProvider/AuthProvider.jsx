import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/allChefData')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const authInfo = { data };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;