import { gql, useQuery } from "@apollo/client";

export interface User {
  id: string;
  name: string;
  surname: string;
  country: string;
  birthday: string;
}

export interface UserData {
  users: User[];
}

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

export interface Country {
  name: string;
}

export interface CountryData {
  countries: Country[];
}

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
    }
  }
`;

export { useQuery };
