import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';
import quote from '../../../assets/icons/quote.svg';


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
            <div className="testimonial_introduce py-12 flex justify-between">
                <div>
                    <h3 className='text-secondary fw-bold text-3xl'>Testimonial</h3>
                    <h2 className='capitalize font-light text-2xl'>What our patients says </h2>
                </div>
                <div>
                    <div className="avatar">
                        <div className="sm: w-24 lg:w-48 rounded">
                            <img src={quote} alt="" />
                        </div>
                    </div>
                </div>
            </div>
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