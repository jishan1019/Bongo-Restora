import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Regestation = () => {

    const { registerUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [regSu, setRegSuc] = useState("");


    const handleRegistration = (event) => {
        event.preventDefault();
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("password not valid need 8 char ");
            return;
        }
        if ((name, email, password)) {
            registerUser(email, password)
                .then((result) => {
                    setRegSuc(result);
                    console.log(regSu);
                    setError("")
                })
                .catch((err) => {
                    setError(err.message);
                });
        }
    };



    return (
        <div>
            <form className="card m-8 border-4 w-96 bg-base-100 shadow mx-auto mt-20">
                <div className="card-body">
                    <h1 className='text-center mb-6 font-semibold text-xl text-red-700'>Regestation Now</h1>

                    <p>{error}</p>

                    <input
                        onChange={(e) => setName(e.target.value)}
                        className="email p-3 border-2 rounded border-red-300"
                        type="text"
                        placeholder="Enter your Name"
                        required

                    />

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="email p-3 border-2  rounded border-red-300"
                        type="email"
                        placeholder="enter your email"
                        required
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="password p-3 border-2 rounded border-red-300"
                        type="text"
                        placeholder="type your password"
                        required
                    />


                    <input className='p-3 border-2 rounded border-red-300' type="text" placeholder='Photo Url' />
                </div>

                <input onClick={handleRegistration} className='p-4 bg-red-700 text-white font-semibold w-28 rounded mx-auto mb-6' type="submit" value='Regestation' />

                <p className='text-center mt-0 mb-4'>Alrady Have Account <Link className='underline' to='/regestation'>Login now</Link></p>

                <img className='mb-4 w-[200px] mx-auto' src="https://i.ibb.co/gSTHXZJ/google-btn.png" alt="" />
                <img className='mb-6 w-[200px] mx-auto' src="https://i.ibb.co/g9f4P0S/github-btn.png" alt="" />

            </form>
        </div>
    );
};

export default Regestation;