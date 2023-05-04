import React from 'react';

const Faq = () => {
    return (
        <section className='mt-16'>
            <h1 className='md:text-4xl text-2xl font-semibold mb-12 text-center'>Frequently Asked Questions</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 ml-8 mr-8 gap-6 '>
                <div>
                    <h1 className='font-bold text-xl'>~ Is Foodera Bread really baked fresh each day?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>~ Do you bake breads containing animal fats or products?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>~ Can I order your products online?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>~ When are you opening a shop near me?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;