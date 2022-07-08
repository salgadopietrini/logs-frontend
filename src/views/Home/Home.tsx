import React from "react";
import { useQuery, gql } from "@apollo/client";
import Grid from "@mui/material/Grid";
import Form from "../../components/Form/Form";
import Greeting from "../../components/Greeting/Greeting";
import List from "../../components/List/List";
import { StyledContainer, StyledStack } from "./home.styles";

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
    <StyledContainer>
      <Grid container>
        <Grid item xs={6}>
          <StyledStack direction="column" spacing={4}>
            <Form />
            <Greeting />
          </StyledStack>
        </Grid>
        <Grid item xs={6}>
          <List />
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default Home;
