import { gql, useQuery } from "@apollo/client";

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

export { useQuery };
