import React from "react";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { GET_USERS, useQuery, UserData, User } from "../../apollo/queries";
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
  const current = useSelector((state: RootState) => state.current);

  return (
    <StyledContainer>
      <StyledLeftContainer>
        <Stack direction="column" spacing={4}>
          <Form />
          {current.defined ? <Greeting data={current} /> : null}
        </Stack>
      </StyledLeftContainer>
      <StyledRightContainer>
        <List users={loading ? ([] as User[]) : data!.users} />
      </StyledRightContainer>
    </StyledContainer>
  );
}

export default Home;
