import React, { useContext, useEffect, useState } from 'react';
import { StarIcon, BookmarkIcon, HandThumbUpIcon, PencilSquareIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom';
import Recipi from './Recipi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


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






    return (
        <section>
            {/* Chef Conatiner */}
            {loading ? <h1 className='p-6 text-center mx-auto animate-bounce rounded-full bg-yellow-400 w-32'>Data Loding.......</h1> :
                <div className='mt-6 mb-12'>
                    <div className="card card-side bg-base-100 shadow mr-8 ml-8">
                        <figure>


                            <LazyLoadImage
                                alt="img"
                                height="200px"
                                effect="blur"
                                src={singleData?.chef?.picture}
                            />

                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{singleData?.chef?.name}</h2>
                            <p>{singleData.chef.short_bio}</p>
                            <div className='flex justify-around items-center'>
                                <p className='inline-flex'><HandThumbUpIcon className="h-6 w-6 text-red-700" />Like: {singleData?.chef?.like}</p>

                                <p className='inline-flex mt-1 mb-1'><PencilSquareIcon className="h-6 w-6 text-red-700" />Number Of Recepies: {singleData?.chef?.number_of_recipes}</p>

                                <p className='inline-flex mb-2 mt-1'><CalendarDaysIcon className="h-6 w-6 text-red-700" />Years of experience: {singleData?.chef?.experience_years}</p>
                            </div>

                        </div>
                    </div>
                </div>

            }
            {/* Chef Recepi Conainer */}
            <div className='mb-8 mr-8 ml-8 grid grid-cols-3'>
                {
                    singleData?.recipes?.map(formula => <Recipi key={formula?.name} formula={formula} ></Recipi>)
                }
            </div>


        </section>
    );
};

export default SingleChefRecepi;