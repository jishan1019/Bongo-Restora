import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Regestation = () => {

    const { registerUser, registerGoogle, googleProvider, auth, gitProvider, registerGitHub } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [regSu, setRegSuc] = useState("");


    const notify = (massage) => {
        toast(massage);
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        if (name.length < 2 || password.length < 7 || email.length < 3) {
            notify("Please Fillup all fild")
            return
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            notify("password not valid need 8 char")
            return;
        }
        if (password !== password1) {
            notify("Password are not same")
            return;
        }
        if ((name, email, password)) {
            registerUser(email, password)
                .then((result) => {
                    setRegSuc(result);
                    notify("Regestation Success")
                })
                .catch((err) => {
                    notify(err.message)
                });
        }
    };

    const handelRegWithGoogle = () => {
        registerGoogle(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                notify(`Regestation Success ${user?.displayName}`)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handelRegWithGithub = () => {
        registerGitHub(auth, gitProvider)
            .then((result) => {
                const user = result.user;
                notify(`Regestation Success ${user?.displayName}`)
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <div>
            <form className="card m-8 border-4 w-96 bg-base-100 shadow mx-auto mt-20">
                <ToastContainer />
                <div className="card-body">
                    <h1 className='text-center mb-6 font-semibold text-xl text-red-700'>Regestation Now</h1>

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
                        type="password"
                        placeholder="type your password"
                        required
                    />

                    <input
                        onChange={(e) => setPassword1(e.target.value)}
                        className="password p-3 border-2 rounded border-red-300"
                        type="password"
                        placeholder="Confirm your password"
                        required
                    />

                    <input className='p-3 border-2 rounded border-red-300' type="text" placeholder='Photo Url' />
                </div>

                <input
                    onClick={handleRegistration}
                    className='p-4 bg-red-700 text-white font-semibold w-28 rounded mx-auto mb-6'
                    type="submit"
                    value='Regestation'
                />



                <p className='text-center mt-0 mb-4'>Alrady Have Account <Link className='underline' to='/regestation'>Login now</Link></p>

                <img onClick={handelRegWithGoogle} className='mb-4 w-[200px] mx-auto' src="https://i.ibb.co/gSTHXZJ/google-btn.png" alt="" />

                <img onClick={handelRegWithGithub} className='mb-6 w-[200px] mx-auto' src="https://i.ibb.co/g9f4P0S/github-btn.png" alt="" />

            </form>
        </div>
    );
};

export default Regestation;