import { useMutation, gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $surname: String!
    $country: String!
    $birthday: String!
  ) {
    createUser(
      name: $name
      surname: $surname
      country: $country
      birthday: $birthday
    ) {
      name
      surname
      country
      birthday
    }
  }
`;

export { useMutation };
