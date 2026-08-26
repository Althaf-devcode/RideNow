import React from 'react'
import { BsFillFuelPumpFill, BsFillGrid1X2Fill } from 'react-icons/bs'
import { IoIosSpeedometer } from 'react-icons/io'

const CarCard = ({car , onRentClick}) => {

  // Map API values to display text
  const availabilityText = car.availabilityStatus === "available"
    ? "Available"
    : car.availabilityStatus === "notAvailable"
      ? "Not Available"
      : car.availabilityStatus;

  return (
    <div className='bg-white rounded-2xl shadow p-4 max-w-sm w-full space-y-2'>
        <img src={car.image?.url} alt={car.name} className='h-48 object-contain w-full bg-gray-200 rounded-md' />
        <h3 className='text-lg font-bold mt-3'> {car.name} </h3>
        <p className='text-blue-600 font-semibold'> ${car.price}/day </p>

        {/* Availability status */}
        <p className={`text-sm font-medium ${
            availabilityText === "Available" ? "text-green-600" : "text-red-600"
        }`}>
            {availabilityText}
        </p>

        <div className='flex justify-between text-xs text-gray-500 mt-2'>
            <span>
                <IoIosSpeedometer className='inline pr-1.5' size={24}/>
                {car.carAvg}k
            </span>

            <span>
                <BsFillGrid1X2Fill className='inline pr-1.5' size={19}/>
                {car.carType}
            </span>

            <span>
                <BsFillFuelPumpFill className='inline pr-1.5' size={20}/>
                {car.fuelType}
            </span>
        </div>

        <button 
            className='mt-2 w-full bg-blue-600 text-white rounded-md py-1.5 '
            onClick={()=> onRentClick(car)}
        > 
            Rent Now 
        </button>
    </div>
  )
}

export default CarCard
