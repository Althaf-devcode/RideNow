import React from 'react'
import img from "../assets/Hero-img.png"
import Button from "../layouts/Button"
import { FaLocationArrow } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className='bg-gray-100  py-9 lg:py-18 px-5 lg:px-14 ' id='hero'>
        <div className='w-full max-w-[1350px] mx-auto px-5 lg:px-2 flex flex-col lg:flex-row items-center justify-between gap-10 pt-20 pb-30'>
            {/* Left section */}
            <div className='flex-1 space-y-6'> 

                <h2 
                    className='text-blue-600 font-semibold text-sm tracking-widest uppercase' 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                > 
                    Welcome to RideNow
                </h2>

                <h1 
                    className='text-5xl font-extrabold leading-tight' data-aos="fade-up" data-aos-delay="200"> 
                    Rent The Best Quality <span className='text-blue-600'> Car's </span> 
                    With Us 
                </h1>

                <p className='text-gray-500 max-w-xl text-justify' data-aos="fade-up" data-aos-delay="300">
                    We Provide top-notch car rental services with affordable pricing and flexible options. whether you're going on a trip or need a ride in town - we got you covered.
                </p>

                {/* Button section */}
                <div className='flex gap-4' data-aos="fade-up" data-aos-delay="400">
                    <button onClick={() => {
                        document.getElementById("Cars").scrollIntoView({
                            behavior: "smooth"
                            })
                        }}
                        className="px-5 py-2 rounded bg-blue-600  text-white font-medium transition-all duration-300 hover:bg-blue-700 cursor-pointer ">
                        Book Your Ride
                    </button>
                </div> 
            </div>

            {/* Right section */}
            <div data-aos="zoom-in-left" >
                <img className='w-170' src={img} alt="hero-car" />
            </div>
        </div>

        

        
        
    </section>
  );
};


