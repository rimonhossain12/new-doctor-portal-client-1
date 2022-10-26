import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {
    const Services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore?',
            img: fluoride


        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore?',
            img: cavity

        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore?',
            img: whitening


        },
    ]
    return (
        <div>
            <div className='mx-auto my-20'>
                <h2 className='text-primary font-bold uppercase text-center text-xl py-3'>Our Services</h2>
                <h4 className='fw-bold text-center text-4xl '>Services We Provided</h4>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-3">
                {
                    Services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;