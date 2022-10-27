import React from 'react';
import format from 'date-fns/format';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    // }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input name='date' value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((value, index) => <option key={index}>{value}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Full Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="booking-modal" className="btn btn-secondary w-full max-w-xs text-white">Submit</label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;