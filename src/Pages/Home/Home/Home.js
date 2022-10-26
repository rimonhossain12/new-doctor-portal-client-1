import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <Services />
            <Treatment />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;