import React, { useContext } from 'react';
import Cover from './Cover';
import ExploreChef from './ExploreChef';
import CaroselFidback from './CaroselFidback';
import Faq from './Faq';
import Subscribe from './Subscribe';
import ChefChard from './ChefChard';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    const { data } = useContext(AuthContext);

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
            <ExploreChef />

            <div className='grid md:grid-cols-3 grid-cols-1 ml-4 mr-4 gap-6 box-border'>
                {
                    data.map(items => <ChefChard key={items.id} items={items}></ChefChard>)
                }
            </div>

            <CaroselFidback />
            <Faq />
            <Subscribe />
        </div>
    );
};

export default Home;