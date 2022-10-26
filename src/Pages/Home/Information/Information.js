import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/phone.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const Information = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3' >
            <InfoCard img={clock} cardTitle="Opening Hour" description="Saturday-ThursDay 9 to 6" bgClass="bg-gradient-to-r from-secondary to-primary text-white" />
            <InfoCard img={marker} cardTitle="Location" description='Khilkhet Moddhopara, Balurmath,Dhaka' bgClass="bg-accent" />
            <InfoCard img={phone} cardTitle="Contact Us" description="+120823928" bgClass="bg-gradient-to-r from-secondary to-primary" />
        </div>
    );
};

export default Information;