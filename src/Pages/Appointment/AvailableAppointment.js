import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import Treatment from './Treatment';


const AvailableAppointment = ({ date }) => {
    const [treatments, setTreatment] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setTreatment(data))
    }, [])

    return (
        <div className='py-5'>
            <h2 className='text-center text-secondary 
            text-thin text-xl hover:cursor-pointer'
            >This is Available Appointment
                : {format(date, 'PP')}</h2>

            <p className="text-center font-thin text-xl text-accent">Please select and services</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-12'>
                {
                    treatments.map(treatment => <Treatment
                        key={treatment._id}
                        treatment={treatment}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;