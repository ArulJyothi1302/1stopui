import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI || "http://54.209.161.105/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
