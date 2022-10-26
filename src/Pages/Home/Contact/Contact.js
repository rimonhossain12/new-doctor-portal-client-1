import React from 'react';
import appointmentImg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimayButton/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointmentImg})`,
            backgroundPosition: 'center center'
        }} className="h-50">
            <div className='text-center'>
                <div className="py-5">
                    <h2 className='text-primary capitalize'>Contact Us</h2>
                    <h3 className='text-3xl text-white'>Stay Connected with us </h3>
                </div>
                <form className='sm:mx-16 lg:py-12 '>
                    <input type="text" placeholder="Type here" className=" input sm:w-96 md:w-1/2 lg:max-w-xs mb-4" /> <br />
                    <input type="text" placeholder="Type here" className=" input sm:w-96 md:w-1/2 lg:max-w-xs mb-4" /> <br />
                    <input type="text" placeholder="Type here" className=" input sm:w-96 md:w-1/2 lg:max-w-xs mb-4" /> <br />
                    <textarea className="textarea sm:w-96 md:w-1/2 lg:w-80 h-32" placeholder="Bio"></textarea> <br />
                    <PrimaryButton className="mt-4">Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Contact;