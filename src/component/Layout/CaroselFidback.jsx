import React from 'react';

const CaroselFidback = () => {
    return (
        <div className='p-12 bg-red-700 mt-16'>
            <h1 className='md:text-5xl text-2xl text-white font-semibold mb-8 text-center'>Feedback Clinte</h1>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='w-[50px] h-[50px] mx-auto '>
                                <img className='rounded-full' src="https://media.istockphoto.com/id/1185367863/photo/smiling-business-woman-portrait.jpg?s=612x612&w=0&k=20&c=i19PDtTroZB0r1K1MmWARhdfQ4NHoTYB7SDyDn8W09I=" alt="" />
                            </div>
                            <p className='text-center'>Great job! Your presentation was very clear and well-organized. You communicated your ideas effectively and made good use of examples and visuals to support your points.

                                It's clear that you put a lot of effort into this assignment, but there are a few areas whe</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='w-[50px] h-[50px] mx-auto '>
                                <img className='rounded-full' src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=" alt="" />
                            </div>
                            <p className='text-center'>It's clear that you put a lot of effort into this assignment, but there are a few areas where you could improve. For example, you may want to spend more time practicing your delivery to make sure you're confident and comfortable when presenting.</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='w-[50px] h-[50px] mx-auto '>
                                <img className='rounded-full' src="https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=612x612&w=0&k=20&c=2qUeKwMylyZJueQnvpg22iCA758VcM8gF_i8MQih3aw=" alt="" />
                            </div>
                            <p className='text-center'>Overall, your work on this project was good, but there were a few mistakes that could have been avoided with more careful attention to detail. It's important to take the time to proofread your work and make sure everything is accurate before submitting.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>

        </div>
    );
};

export default CaroselFidback;