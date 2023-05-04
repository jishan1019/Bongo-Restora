import React, { useContext, useEffect, useState } from 'react';
import { StarIcon, BookmarkIcon, HandThumbUpIcon, PencilSquareIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


const SingleChefRecepi = () => {

    const { id } = useParams();
    const [singleData, setSingleData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/allChefData/${id}`)
            .then(response => response.json())
            .then(json => {
                setSingleData(json);
                setLoading(false);
            })
    }, [id])

    // const { name, short_bio, picture, like, number_of_recipes, experience_years } = singleData.chef;



    const [isButtonDisabled, setButtonDesable] = useState(false)

    const notify = () => {
        toast("Add To Faviroute.");
        setButtonDesable(true)
    };

    return (
        <section>
            {/* Chef Conatiner */}
            {loading ? <div>Loading...</div> :
                <div className='mt-6 mb-12'>
                    <div className="card card-side bg-base-100 shadow mr-8 ml-8">
                        <figure><img loading="lazy" className='h-[200px]' src={singleData.chef.picture} alt=" Movie" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">{singleData.chef.name}</h2>
                            <p>{singleData.chef.short_bio}</p>
                            <div className='flex justify-around items-center'>
                                <p className='inline-flex'><HandThumbUpIcon className="h-6 w-6 text-red-700" />Like: {singleData.chef.like}</p>

                                <p className='inline-flex mt-1 mb-1'><PencilSquareIcon className="h-6 w-6 text-red-700" />Number Of Recepies: {singleData.chef.number_of_recipes}</p>

                                <p className='inline-flex mb-2 mt-1'><CalendarDaysIcon className="h-6 w-6 text-red-700" />Years of experience: {singleData.chef.experience_years}</p>
                            </div>

                        </div>
                    </div>
                </div>

            }
            {/* Chef Recepi Conainer */}
            <div className='mb-8 mr-8 ml-8 grid grid-cols-3'>


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


        </section>
    );
};

export default SingleChefRecepi;