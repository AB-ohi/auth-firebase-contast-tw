import React, { useContext } from 'react';
import { UserProvider } from '../../Provider/AuthProvider';

const Home = () => {

    const {user, createUser} = useContext(UserProvider)
    console.log(user)
    return (
        <div>
            <h2>this is home page {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;