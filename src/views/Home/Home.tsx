import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { GET_USERS, useQuery, UserData } from "../../apollo/queries";
import Form from "../../components/Form/Form";
import Greeting from "../../components/Greeting/Greeting";
import List from "../../components/List/List";
import {
  StyledContainer,
  StyledLeftContainer,
  StyledRightContainer,
} from "./home.styles";

function Home() {
  const { loading, data } = useQuery<UserData>(GET_USERS);

  return (
    <StyledContainer>
      <StyledLeftContainer>
        <Stack direction="column" spacing={4}>
          <Form />
          <Greeting />
        </Stack>
      </StyledLeftContainer>
      <StyledRightContainer>
        {loading ? <CircularProgress /> : <List users={data!.users} />}
      </StyledRightContainer>
    </StyledContainer>
  );
}

export default Home;
