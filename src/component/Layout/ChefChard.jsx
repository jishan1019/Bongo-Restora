import React from 'react';
import { Link } from 'react-router-dom';
import { HandThumbUpIcon, CalendarDaysIcon, PencilSquareIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'

const ChefChard = () => {
    return (
        <>
            <div className="card border-2 full bg-base-100 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHo6p-3MVcmbdA0usEEvqkJY-E9fXxVTbuGA&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Chef Name </h2>

                    <p className='inline-flex mb-2 mt-1'><CalendarDaysIcon className="h-6 w-6 text-red-700" />Years of experience</p>

                    <p className='inline-flex mt-1 mb-1'><PencilSquareIcon className="h-6 w-6 text-red-700" />Number Of Recepies</p>

                    <div className='flex justify-between items-center mt-3'>
                        <p className='inline-flex'><HandThumbUpIcon className="h-6 w-6 text-red-700" />18</p>

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