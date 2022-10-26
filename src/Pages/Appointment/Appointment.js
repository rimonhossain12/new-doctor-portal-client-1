import React from 'react';
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <AppointBanner />
            <AvailableAppointment />
        </div>
    );
};

export default Appointment;