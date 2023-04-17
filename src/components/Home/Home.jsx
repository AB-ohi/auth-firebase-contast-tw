import React, { useContext } from 'react';
import { UserProvider } from '../../Provider/AuthProvider';

const Home = () => {

    const user = useContext(UserProvider)
    return (
        <div>
            <h2>this is home page {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;