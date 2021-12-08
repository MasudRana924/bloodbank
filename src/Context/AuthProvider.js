import React, { createContext } from 'react';
import useDonars from '../Hooks/useDonars';
export const AuthContext=createContext()
const AuthProvider = (  {children}) => {

    const allText=useDonars()
    
    return (
        <AuthContext.Provider value={allText}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;