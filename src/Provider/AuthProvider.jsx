import React, { createContext } from 'react';
export const UserProvider = createContext(null);

const AuthProvider = ({children}) => {
    const user = {
        displayName :"ohi khan"
    }



    return (
        <div>
            <UserProvider.Provider value= {user}>
                {children}
            </UserProvider.Provider>
        </div>
    );
};

export default AuthProvider;