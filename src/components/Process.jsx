import React from 'react'
import { FaCarSide, FaCheckCircle, FaWpforms } from 'react-icons/fa'

const steps = [
    {
        id: 1,
        title: "Choose Your Car",
        desc: "Browse through our wide range of cars and pick the one that suits your journey.",
        icon: <FaCarSide className='text-white text-2xl' />
    },

    {
        id: 2,
        title: "Fill Booking Form",
        desc: "Enter your name,email and rental preferences in our quick booking form",
        icon: <FaWpforms className='text-white text-2xl'/>
    },

    {
        id: 3,
        title: "Start Your Journey",
        desc: "With everything ready, it's time to enjoy your ride ",
        icon: <FaCheckCircle className='text-white text-2xl'/>
    },
];



const Process = () => {
  return (
    <section className='py-12 px-5 lg:px-14 bg-gray-50'>
        <div className='text-center mb-12'>
            <h2 
                className='text-3xl font-bold'
                data-aos = "zoom-in"
                data-aos-delay = "100"
            > 
                How It Works 
            </h2>
            <p 
                className='text-gray-600 mt-2 text-sm'
                data-aos = "zoom-in"
                data-aos-delay = "200"
            > 
                Follow these 3 simple steps to book your perfect ride. 
            </p>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto px-8'>
            {steps.map((step, idx) =>(
                <div key={idx} 
                    className='relative bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 pt-16 transition-all duration-300 group'
                    data-aos = "fade-up"
                    data-aos-delay = "idx * 100"
                >
                    {/* circle icon */}
                    <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 w-16 h-16 mt-2.5 md:mt-0 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition'>
                        {step.icon}
                    </div>

                    {/* step number */}
                    <span className=' absolute top-4 right-4 text-sm font-semibold text-gray-300'> Step {step.id} </span>

                    <h3 className=' text-lg font-semibold text-center mb-2'> {step.title} </h3>

                    <p className='text-sm text-gray-600 text-center'> {step.desc} </p>

                </div>
            ))}
        </div>
    </section>
  )
}

export default Process