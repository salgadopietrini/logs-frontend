import React from "react";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { QueryResult } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import { GET_USERS, GET_COUNTRIES, useQuery } from "../../apollo/queries";
import Form from "../../components/Form/Form";
import Greeting from "../../components/Greeting/Greeting";
import List from "../../components/List/List";
import {
  UserQueryData,
  UserQuery,
  RootState,
  CountryData,
  Country,
} from "../../utils/types";
import {
  StyledContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledBox,
} from "./home.styles";
import NoConnection from "../NoConnection/NoConnection";

function Home() {
  const users = useQuery<UserQueryData>(GET_USERS);
  const countries = useQuery<CountryData>(GET_COUNTRIES);
  const current = useSelector((state: RootState) => state.current);

  return (
    <StyledContainer>
      {users.networkStatus === 1 && (
        <StyledBox>
          <CircularProgress size={80} />
        </StyledBox>
      )}
      {users.networkStatus === 7 && (
        <>
          <StyledLeftContainer>
            <Stack direction="column" spacing={4}>
              <Form
                countries={
                  countries.loading
                    ? ({ loading: true } as QueryResult)
                    : countries
                }
              />
              {current.defined ? (
                <Greeting
                  data={current}
                  countries={countries.data!.countries}
                />
              ) : null}
            </Stack>
          </StyledLeftContainer>
          <StyledRightContainer>
            <List
              users={users.loading ? ([] as UserQuery[]) : users.data!.users}
              countries={
                countries.loading
                  ? ([] as Country[])
                  : countries.data!.countries
              }
            />
          </StyledRightContainer>
        </>
      )}
      {users.networkStatus === 8 && <NoConnection />}
    </StyledContainer>
  );
}

export default Home;
