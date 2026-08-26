import React, { useState } from 'react'
import toast from 'react-hot-toast';
import client from '../lib/graphqlClient';
import { CREATE_BOOKING } from '../queries/createBooking';

const Modal = ({car, onClose, isLoggedIn, user}) => {
    const [form , setForm] = useState({
        name: user?.fullname || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        phone:"",
        date:"",
    });

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!isLoggedIn){
            toast.error("Please login first!");
            return;
        }

        try{
            await client.request(CREATE_BOOKING, {
                username: form.name,
                email: form.email,
                phone: parseInt(form.phone, 10),
                bookingDate: form.date,
                carId: car.id,
            });

            toast.success("Your ride booked successfully!");
            onClose();
        }catch(err){
            console.log(err);
            toast.error("Booking failed");
        }
    }

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };

  

    return (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out'>
            <div className='bg-white p-6 rounded-2xl shadow-xl flex gap-6 w-full max-w-3xl mx-4'>
                
                {/* Left side car info */}
                <div className='flex-1'>
                    <img src={car.image?.url} alt={car.name} className='w-full h-52 object-contain '/>
                    <h2 className='text-xl font-bold mt-2'> {car.name} </h2>
                    <p className='text-gray-600'> ${car.price}/day </p>
                </div>

                {/* Right form */}
                <form className='flex-1 space-y-4' onSubmit={handleSubmit}> 
                    <input type="text" name='name' placeholder='Your Name' required onChange={handleChange} className='w-full border p-2 rounded'/>
                    <input type="email" name='email' placeholder='Your Email' required onChange={handleChange} className='w-full border p-2 rounded'/>
                    <input type="tel" name='phone' placeholder='Phone Number' required onChange={handleChange} className='w-full border p-2 rounded'/>
                    <input type="date" name='date' placeholder='Booking Date' required onChange={handleChange} className='w-full border p-2 rounded'/>
                    <div className='flex gap-4'>
                        <button type='button' onClick={onClose} className='w-full py-2 rounded border'> Close </button>
                        <button type='submit' className='w-full py-2 bg-blue-600 text-white rounded'> Book Ride </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Modal
