import React from 'react';

const Recipi = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 border-1 shadow-md">
                <figure><img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu966OtyyOj-T02fw8WFGOUkO_z3-VT9Fjg&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="card-title">recipe name</h2>
                    <p className='mt-3'>cooking method 5 point</p>
                    <div className='flex justify-between items-center  mt-4'>
                        <p className='inline-flex'><StarIcon className="h-6 w-6 text-red-700" />Rating: 18</p>

                        <div onClick={notify}>
                            <p className={`pt-2 pb-2 pl-3 pr-3 inline-flex font-semibold text-white rounded ${isButtonDisabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-700 cursor-pointer'}`}>
                                Add Favourite <BookmarkIcon className="h-6 w-6 ml-1 text-white" />
                            </p>
                        </div>

                        <ToastContainer />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Recipi;