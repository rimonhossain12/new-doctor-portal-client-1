import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimayButton/PrimaryButton';
import bgChair from '../../../assets/images/bg.png';


const Banner = () => {
    return (
        <div className="hero min-h-screen"
            style={{
                background: `url(${bgChair})`,
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl w-full" alt='not found' />
                <div>
                    <h1 className="text-5xl font-bold capitalize">your new smile starts here.</h1>
                    <p className="py-6 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Rem tenetur sit at dicta quasi iste recusandae animi! Error, distinctio atque! Voluptate, dolorum rem, modi ratione quis autem beatae temporibus
                        quas ab voluptatem laborum corrupti natus quo quibusdam sunt mollitia placeat!
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;