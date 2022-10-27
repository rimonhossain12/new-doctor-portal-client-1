import React from 'react';

const Treatment = ({ treatment }) => {
    const { name, slots } = treatment;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available </p>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500 font-thin'>Try Another Day</span>
                    }
                </p>
                <div className="card-actions justify-center">
                    <div className="card-actions">
                        <button disabled={slots.length === 0} className="btn btn-primary capitalize">Book an appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;