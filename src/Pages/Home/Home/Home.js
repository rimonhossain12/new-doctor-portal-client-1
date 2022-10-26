import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <Services />
            <Treatment />
            <Appointment />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;