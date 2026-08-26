import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import client from '../lib/graphqlClient';
import { GET_CARS } from '../queries/getCars';
import toast from 'react-hot-toast';
import CarCard from '../layouts/CarCard';
import Modal from './Modal';

export const CarList = () => {

  const { isSignedIn , user } = useUser() // Simulate login
  const [cars , setCars] = useState([]);
  const [filter , setFilter] = useState("All");
  const [selectedCar , setSelectedCar] = useState(null);
  


  useEffect(()=>{
    client
      .request(GET_CARS)
      .then((res) => setCars(res.cars))
      .catch(()=>toast.error("Failed to fetch cars"));
  },[])


  const filteredCars = filter === "All" ? cars: cars.filter((car) => car.carBrand === filter); 
  const uniqueBrands = ["All", ...new Set(cars.map((car) => car.carBrand))];

  return (
    <section className='py-18 px-4 bg-gray-100 ' id='Cars'>
      <h2 className='text-center text-3xl font-bold mb-6'  
        data-aos="fade-up" 
        data-aos-delay="100"
      > 
        Explore Our Top Deal 
      </h2>

      {/*filters*/}
      <div className='flex gap-3 justify-center mb-8 flex-wrap'  data-aos="fade-up" data-aos-delay="100">
        {uniqueBrands.map((brand , i) =>(
          <button key={i} 
          className={`px-4 py-2 rounded-full border text-sm ${
            filter === brand
            ? "bg-blue-100 text-blue-600 border-blue-300"
            : "bg-white border-gray-200"
            }`}
            onClick={()=> setFilter(brand)}
            >
            {brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/*cards*/}
      <div 
        className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-20 place-items-center'
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        {filteredCars.map((car) =>(
          <CarCard key = {car.id} car={car} onRentClick={setSelectedCar}/>
        ))}
      </div>

      {/*modal*/}
      {selectedCar && (
        <Modal
          car={selectedCar}
          onClose={()=> setSelectedCar(null)}
          isLoggedIn={isSignedIn}
          user={user}
        />
      )}

    </section> 
  )
}

export default CarList;