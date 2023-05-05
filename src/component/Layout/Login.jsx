import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    // navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    return (
        <form className="card m-8 border-4 w-96 bg-base-100 shadow mx-auto mt-20">
            <div className="card-body">
                <h1 className='text-center mb-6 font-semibold text-xl text-red-700'>Login Now</h1>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="email p-3 border-2 mb-4 rounded border-red-300"
                    type="email"
                    placeholder="enter your email"
                />

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-3 border-2 rounded border-red-300"
                    type="password"
                    placeholder="enter your password"
                />


            </div>

            <input onClick={handleLogin} className='p-4 bg-red-700 text-white font-semibold w-24 rounded mx-auto mb-2' type="submit" value='Login' />

            <p className='text-center mt-4 mb-4'>Create new Account <Link className='underline' to='/regestation'>Here</Link></p>

            <img className='mb-4 w-[200px] mx-auto' src="https://i.ibb.co/gSTHXZJ/google-btn.png" alt="" />
            <img className='mb-6 w-[200px] mx-auto' src="https://i.ibb.co/g9f4P0S/github-btn.png" alt="" />

        </form>
    );
};

export default Login;