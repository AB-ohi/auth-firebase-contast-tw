import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase';

export const UserProvider = createContext(null);
const auth = getAuth (app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
        signIn
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