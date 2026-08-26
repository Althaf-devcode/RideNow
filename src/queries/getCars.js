export const GET_CARS = `
query GetCars {
    cars{
        id
        name
        price
        carAvg
        carType
        carBrand
        fuelType
        availabilityStatus
        image{
            url
        }
    }
}
`;