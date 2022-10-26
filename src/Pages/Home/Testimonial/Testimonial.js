import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonial = () => {
    const Reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            img: people1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ab architecto doloremque, explicabo dolore dolor modi delectus ea id nulla quidem?'
        },
        {
            _id: 2,
            name: 'Jessica',
            location: 'California',
            img: people2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ab architecto doloremque, explicabo dolore dolor modi delectus ea id nulla quidem?'
        },
        {
            _id: 3,
            name: 'Marray',
            location: 'California',
            img: people3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ab architecto doloremque, explicabo dolore dolor modi delectus ea id nulla quidem?'
        },
    ]
    return (
        <div className='py-10'>
            <h3 className='text-primary fw-bold'>Testimonial</h3>
            <h2 className='capitalize font-light text-2xl'>What our patients says </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Testimonial;