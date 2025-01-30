import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI, // Use the correct environment variable
  cache: new InMemoryCache(),
});

export default client;
