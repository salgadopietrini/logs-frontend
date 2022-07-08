import React from "react";
import { useQuery, gql } from "@apollo/client";
import Stack from "@mui/material/Stack";
import Form from "../../components/Form/Form";
import Greeting from "../../components/Greeting/Greeting";
import List from "../../components/List/List";
import {
  StyledContainer,
  StyledLeftContainer,
  StyledRightContainer,
} from "./home.styles";

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

  return (
    <StyledContainer>
      <StyledLeftContainer>
        <Stack direction="column" spacing={4}>
          <Form />
          <Greeting />
        </Stack>
      </StyledLeftContainer>
      <StyledRightContainer>
        <List />
      </StyledRightContainer>
    </StyledContainer>
  );
}

export default Home;
