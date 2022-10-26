import React from 'react';

const Treatment = ({ treatment }) => {
    const { name, slots } = treatment;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>

                <p>

                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available
                </p>

                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;