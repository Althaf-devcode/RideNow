import React from 'react'
import { FaStar } from 'react-icons/fa';
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

const reviews = [
    {
        name: "Aman verma",
        review: "Absolutely smooth experience! Booking was simple and the car was in perfect condition. Will use again.",
        image: user1,
        rating: 5,
    },
    
    {
        name: "Priya Sharma",
        review: "Super convenient and affordable! Loved the flexibility and customer service. Highly recommended.",
        image: user2,
        rating: 4,
    },
    {
        name: "Rahul Mehta",
        review: "Great selection of cars and fast support. The ride was smooth and pickup/drop was on time.",
        image: user3,
        rating: 5,
    }
];


const Review = () => {
  return (
    <section className='py-16 px-5 lg:px-14 bg-gray-100'>
        <div className='text-center mb-12'>
            <h2 
                className='text-3xl font-bold text-gray-800'
                data-aos="fade-up"
                data-aos-delay="100" 
            > 
                What our Customers Say 
            </h2>
            <p 
                className='text-gray-500 mt-2 text-sm'
                data-aos="fade-up"
                data-aos-delay="200" 
            > 
                Real rewiews from our happy customers who love to ride with us. 
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {reviews.map((r , idx) => (
                <div 
                    key={idx} 
                    className='bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition'
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                >
                    
                    <img src={r.image} alt={r.name} className='w-20 h-20 rounded-full mx-auto mb-4 object-cover' />
                    <h4 className='text-lg font-semibold mb-1'> {r.name} </h4>
                    <p className='text-sm text-gray-600 mb-3'> {r.review} </p>
                    <div className='flex justify-center text-yellow-400'>
                        {Array.from({length: r.rating}).map((_ , i) =>(
                            <FaStar key={i}/>

                        ))}
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}

export default Review