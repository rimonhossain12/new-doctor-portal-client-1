import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.description}</p>
                <div className="flex items-center mt-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={review.img} alt='not found' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-accenta font-bold'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;