import React from 'react';

const Blog = () => {
    return (
        <>
            <section className='mt-16 mb-8'>
                <h1 className='md:text-4xl text-2xl font-semibold mb-12 text-center'>Wellcome To Bongo Restora Blog</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 ml-8 mr-8 gap-6 '>
                    <div>
                        <h1 className='font-bold text-xl'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                        <p className='text-red-700'>controlled components refer to components that have their state and behavior controlled by the parent component.Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl'>2. How to validate React props using PropTypes?</h1>
                        <p className='text-red-700'>
                            To validate React component props using PropTypes, import PropTypes, define propTypes object, and set its properties to expected prop types.</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl'>3. Tell us the difference between nodejs and express js.</h1>
                        <p className='text-red-700'>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl'>4. What is a custom hook, and why will you create a custom hook?</h1>
                        <p className='text-red-700'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;