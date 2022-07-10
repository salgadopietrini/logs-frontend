import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  /*   const token = localStorage.getItem('token'); */
  // return the headers to the context so httpLink can read them
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFudWVsc2FsZ2FkbyIsInBhc3N3b3JkIjoiUHJvamVjdE1vc2FubzIwMjIifQ.H19MNlY_vcWjUn4o13qKMxawzOhb7nAVNNqPoag5hzM";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export { client, ApolloProvider };
