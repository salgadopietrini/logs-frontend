import { gql, useQuery, useLazyQuery } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      surname
      country
      birthday
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name {
        en
        pt
      }
      code
    }
  }
`;

export const LOG_IN = gql`
  query LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      token
      logged
    }
  }
`;

export { useQuery, useLazyQuery };
