import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handelSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onChange={handelSubmit} className="card m-8 border-4 w-96 bg-base-100 shadow mx-auto mt-20">
            <div className="card-body">
                <h1 className='text-center mb-6 font-semibold text-xl text-red-700'>Login Now</h1>
                <input className='p-3 border-2 mb-4 rounded border-red-300' type="email" placeholder='Enter Your Email' />
                <input className='p-3 border-2 rounded border-red-300' type="password" placeholder='Enter Your Password' />
            </div>

            <input className='p-4 bg-red-700 text-white font-semibold w-24 rounded mx-auto mb-2' type="submit" value='Login' />

            <p className='text-center mt-4 mb-4'>Create new Account <Link className='underline' to='/regestation'>Here</Link></p>

            <img className='mb-4 w-[200px] mx-auto' src="https://i.ibb.co/gSTHXZJ/google-btn.png" alt="" />
            <img className='mb-6 w-[200px] mx-auto' src="https://i.ibb.co/g9f4P0S/github-btn.png" alt="" />

        </form>
    );
};

export default Login;