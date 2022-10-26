import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/phone.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const Information = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3'>
            <InfoCard img={clock} cardTitle="Opening Hour" bgClass="bg-gradient-to-r from-secondary to-primary text-white" />
            <InfoCard img={marker} cardTitle="Opening Hour" bgClass="bg-accent" />
            <InfoCard img={phone} cardTitle="Opening Hour" bgClass="bg-gradient-to-r from-secondary to-primary" />
        </div>
    );
};

export default Information;