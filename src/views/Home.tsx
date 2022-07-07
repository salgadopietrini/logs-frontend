import React from "react";
import { useQuery, gql } from "@apollo/client";

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
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

export default Home;
