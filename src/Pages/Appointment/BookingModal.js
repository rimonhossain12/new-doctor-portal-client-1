import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="booking-modal" className="btn btn-secondary w-full max-w-xs text-white">Submit</label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;