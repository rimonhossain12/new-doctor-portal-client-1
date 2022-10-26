import React from 'react';
import format from 'date-fns/format';

const AvailableAppointment = ({ date }) => {

    return (
        <div className='py-12'>
            <h2 className='text-center text-secondary text-thin text-xl hover:cursor-pointer'>This is Available Appointment : {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;