import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase';

export const UserProvider = createContext(null);
const auth = getAuth (app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user
    }

    return (
        <div>
            <UserProvider.Provider value= {authInfo}>
                {children}
            </UserProvider.Provider>
        </div>
    );
};

export default AuthProvider;