import React from "react";
import { useQuery, gql } from "@apollo/client";
import Form from "../components/Form/Form";
import Greeting from "../components/Greeting/Greeting";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log({ loading, error, data });

  return (
    <div>
      <Form />
    </div>
  );
}

export default Home;
