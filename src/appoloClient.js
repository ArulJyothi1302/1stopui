import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI || import.meta.env.VITE_AWS_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;
