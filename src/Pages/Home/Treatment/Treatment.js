import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <section>
            <div className="hero min-h-screen" >
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div>
                        <h1 className="text-5xl font-bold capitalize">Exceptional Dental care. On Your Terms</h1>
                        <p className="py-6 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Rem tenetur sit at dicta quasi iste recusandae animi! Error, distinctio atque! Voluptate, dolorum rem, modi ratione quis autem beatae temporibus
                            quas ab voluptatem laborum corrupti natus quo quibusdam sunt mollitia placeat!
                        </p>
                    </div>

                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl w-full" alt='not found' />
                </div>
            </div>
        </section>
    );
};

export default Treatment;