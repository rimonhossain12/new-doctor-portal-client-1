import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
                <img src={chair} alt='not found' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                    <p className='text-center text-primary'>You have selected : {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;