import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointBanner = ({ date, setDate }) => {
    return (
        <div className="hero lg:min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
                <img src={chair} alt='not found' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='shadow-xl w-full rounded-md'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;