import React from 'react';

const Treatment = ({ treatment, setTreatment }) => {
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
                        <label htmlFor="booking-modal" className="btn modal-button btn-secondary capitalize"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(treatment)}
                        > Book appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;