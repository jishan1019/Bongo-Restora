import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='bg-red-700 h-[200px]'>
            <div className='text-center font-semibold text-md pt-8'>
                <Link className='text-white ml-4' to='/regestation'>Regestation</Link>
                <Link className='text-white ml-4' to='/'>Affiliate</Link>
                <Link className='text-white ml-4' to='/'>FAQ</Link>
                <Link className='text-white ml-4' to='/blog'>Blogs</Link>
            </div>

            <div className='mt-6 mb-2 w-[150px] mx-auto flex justify-center items-center'>
                <img className='w-8 h-8 mx-auto' src="../../../public/fb.png" alt="" />
                <img className='w-8 h-8 mx-auto' src="../../../public/li.png" alt="" />
                <img className='w-8 h-8 mx-auto' src="../../../public/insta.png" alt="" />
                <img className='w-8 h-8 mx-auto' src="../../../public/twi.png" alt="" />
            </div>

            <p className='text-center text-white mt-4 font-semibold text-md'>© 2023. Bongo Restora. All rights reserved.</p>
        </div>
    );
};

export default Footer;