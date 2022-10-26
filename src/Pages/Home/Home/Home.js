import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <Services />
        </div>
    );
};

export default Home;