import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import Treatment from './Treatment';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log('data found form ', treatment);

    return (
        <div className='py-5'>
            <h2 className='text-center text-secondary 
            text-thin text-xl hover:cursor-pointer hover:underline pb-3'
            >This is Available Appointment
                : {format(date, 'PP')}</h2>

            <p className="text-center font-thin text-xl text-accent">Please select a service</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-12'>
                {
                    services.map(treatment => <Treatment
                        key={treatment._id}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    />)
                }
                {
                    treatment && <BookingModal
                        treatment={treatment}
                        date={date}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;