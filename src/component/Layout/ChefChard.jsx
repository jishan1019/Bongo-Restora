import React from 'react';
import { Link } from 'react-router-dom';
import { HandThumbUpIcon, CalendarDaysIcon, PencilSquareIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'

const ChefChard = ({ items }) => {
    const { id, chef } = items;
    return (
        <>
            <div className="card border-2 full bg-base-100 shadow-xl">
                <figure><img src={chef.picture} alt="Shoes" loading="lazy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef.name}</h2>

                    <p className='inline-flex mb-2 mt-1'><CalendarDaysIcon className="h-6 w-6 text-red-700" />Years of experience: {chef.experience_years}</p>

                    <p className='inline-flex mt-1 mb-1'><PencilSquareIcon className="h-6 w-6 text-red-700" />Number Of Recepies: {chef.number_of_recipes}</p>

                    <div className='flex justify-between items-center mt-3'>
                        <p className='inline-flex'><HandThumbUpIcon className="h-6 w-6 text-red-700" />{chef.like}</p>

                        <Link to='/singleChepRecepi'>
                            <button className='pt-2 pb-2 pl-3 pr-3 inline-flex bg-red-700 rounded font-semibold text-white'>View Recipes <ArrowLongRightIcon className="h-6 w-6 ml-1 text-white" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefChard;