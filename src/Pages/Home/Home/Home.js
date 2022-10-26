import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
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