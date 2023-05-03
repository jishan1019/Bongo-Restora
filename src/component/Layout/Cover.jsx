import React from 'react';
import { Link } from 'react-router-dom';

const Cover = () => {
    return (
        <div className='flex justify-center items-center flex-col-reverse md:flex-row'>
            <div className='ml-4 md:ml-8 text-center md:text-left mt-4 md:mt-0'>
                <h1 className='md:text-5xl text-2xl font-semibold mb-8'>Good food choices <br /> are good <br /> investments.</h1>
                <p className='text-red-700 text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, vel illum! Dolorum numquam illo eum harum doloremque mollitia suscipit voluptatum!</p>

                <div className='mt-6'>
                    <button className='bg-red-700 hover:bg-white p-4 text-white hover:text-black font-bold rounded hover:border-red-700 hover:border-4'>Order now</button>
                    <button className='shadow-md p-4 font-bold rounded hover:border-red-700 hover:border-4 ml-4' ><Link to='/blog'>Learn More</Link></button>
                </div>
            </div>
            <div>
                <img className='w-full' src="../../../public/3.jpg" alt="" />
            </div>
        </div>
    );
};

export default Cover;