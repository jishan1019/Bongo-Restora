import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-20 text-center'>
            <h1 className='md:text-4xl text-2xl font-semibold mb-12 text-center ml-3 mr-3'>Hurry up! Subscribe our newsletter <br />
                and get 25% Off</h1>
            <p className='text-red-700'>Limited time offer for this month. No credit card required.</p>

            <div className='mt-6 mb-12'>
                <input className='border-gray-300 rounded border-4 p-3 mr-4 font-semibold text-red-700' type="email" placeholder='Enter your eamil adress' />
                <button className='bg-red-700 hover:bg-white p-4 text-white hover:text-black font-bold rounded hover:border-red-700 hover:border-4'>Order now </button>
            </div>

        </div>
    );
};

export default Subscribe;