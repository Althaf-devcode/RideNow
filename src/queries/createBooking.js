import { gql } from "graphql-request";

export const CREATE_BOOKING = gql`
mutation CreateBooking(
    $username: String!
    $email: String!
    $phone: Int!
    $bookingDate: Date!
    $carId: ID!
){
  createBooking(
    data:{
      username: $username
      email: $email
      phone: $phone
      bookingDate: $bookingDate
      carList: { connect: { id: $carId } }
    }
  ){
    id
  }
}
`;
