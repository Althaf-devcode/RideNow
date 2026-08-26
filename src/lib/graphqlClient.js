import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(import.meta.env.VITE_HYGRAPH_ENDPOINT);
export default client;
