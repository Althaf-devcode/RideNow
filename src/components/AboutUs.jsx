import React from 'react'
import { FaGlobeAsia, FaHandshake, FaRegSmileBeam } from 'react-icons/fa'
import img from "../assets/About-us.png"

const points = [
    {
        icon: <FaRegSmileBeam className='text-white text-xl'/>,
        title: "Customer Happinesss",
        desc: "Rated 4.9/5 by 10,000 users for excellent service and support",
    },

    {
        icon: <FaHandshake className='text-white text-xl'/>,
        title: "Trusted Partnerships",
        desc: "We collaborated with top car providers to ensure best-in-class experience",
    },

    {
        icon: <FaGlobeAsia className='text-white text-xl'/>,
        title: "Wider Reach",
        desc: "Services available in 20+ cities across the country - and growing!",
    },
];

const AboutUs = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 py-20 bg-gray-50' id='About'>
        {/* left image */}
        <div className='w-full lg:w-1/2' data-aos ="zoom-in" data-aos-delay="100">
            <img src={img} alt="about us"/>
        </div>

        {/* Right content */}
        <div className='w-full lg:w-1/2 space-y-6' data-aos ="fade-up" data-aos-delay="200">
            <h2 className='text-4xl font-bold text-gray-900'> About Us </h2>
            <p className='text-gray-600 leading-relaxed'>
                At <strong> RideNow </strong> , we believe in making every journey seamless, safe, and enjoyable. whether it's a quick city trip or a long vacation, we provide the perfect car for your needs - fast, reliable, and hassle-free.
            </p>

            <div className='space-y-5'>
                {points.map((item , idx) =>(
                    <div key={idx} className='flex gap-5 items-start'>
                        <div className='bg-blue-600 p-3 rounded-full shadow-md'> {item.icon} </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-800'> {item.title} </h4>
                            <p className='text-sm text-gray-600'> {item.desc} </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        

    </section>
  )
}

export default AboutUs