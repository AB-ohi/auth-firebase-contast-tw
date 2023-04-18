import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProvider } from '../../Provider/AuthProvider';

const Register = () => {

    const {user, createUser} = useContext(UserProvider);

    console.log(user)
    const handelRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        


        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
            <h1>Pls Register</h1>
            <form onSubmit={handelRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" name='name' placeholder="Inter Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register Now</button>
                </div>
            </form>
            <Link to="/logIn" className="label-text-alt link link-hover">You have all ready account?</Link>
        </div>
    );
};

export default Register;