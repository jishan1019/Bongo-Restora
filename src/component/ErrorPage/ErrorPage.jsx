import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';


const ErrorPage = () => {
    return (
        <div>
            <div className='mt-12'>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_ail5bspx.json"
                    style={{ height: '300px', width: '400px' }}
                >
                </Player>
            </div>

            <h1 className='text-center  mt-12'><span className='text-3xl'>Eroor 404 Not Found</span> <br /><br />
                <span>
                    <Link to='/'>
                        <button className='bg-red-700 text-white p-2 rounded-md mx-auto text-center'>Go Back</button>
                    </Link>
                </span></h1>

        </div>
    );
};

export default ErrorPage;