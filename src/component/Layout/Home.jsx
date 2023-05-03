import React from 'react';
import Cover from './Cover';

const Home = () => {
    return (
        <div>
            <Cover />
            <div className='pt-10 pb-10 text center bg-red-700 text-white flex md:justify-evenly justify-center flex-col md:flex-row items-center  mt-8 md:mt-0 font-bold'>
                <div className='mb-4 md:mb-0'>
                    <h1 className='text-3xl'>1287+</h1>
                    <p className='text-md'>SAVINGS</p>
                </div>

                <div className='mb-4 md:mb-0'>
                    <h1 className='text-3xl'>5786+</h1>
                    <p className='text-md'>PHOTOS</p>
                </div>

                <div className='mb-4 md:mb-0'>
                    <h1 className='text-3xl'>1440+</h1>
                    <p className='text-md'>ROCKETS</p>
                </div>

                <div className='mb-4 md:mb-0'>
                    <h1 className='text-3xl'>7110+</h1>
                    <p className='text-md'>GLOBES</p>
                </div>
            </div>
        </div>
    );
};

export default Home;