import React from 'react';
import appointmentImg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../Shared/PrimayButton/PrimaryButton';

const Appointment = () => {
    return (
        <section className='flex justify-center items-center mt-12 px-10'
            style={{
                background: `url(${appointmentImg})`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="not working" />
            </div>
            <div className='flex-1'>
                <h3 className='text-primary font-bold'>Appointment</h3>
                <h2 className='capitalize text-white text-3xl'>Make an appointment today</h2>
                <p className='text-white font-thin text-justify mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quam officia unde. Id consectetur voluptatem nobis optio qui officiis. Tempora saepe et consequuntur voluptatibus quod voluptatum accusamus earum illo vel?</p>
                <div className='p-5'>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default Appointment;