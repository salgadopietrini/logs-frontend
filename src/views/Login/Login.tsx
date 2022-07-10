import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { LOG_IN, useLazyQuery } from "../../apollo/queries";
import { LogInData, LoginProps, Credentials } from "../../utils/types";
import {
  StyledContainer,
  StyledStack,
  StyledButtonContainer,
  StyledButton,
} from "./login.styles";

function Login({ auth, setAuth }: LoginProps) {
  const intl = useIntl();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, []);

  const [credentials, setCreadentials] = useState<Credentials>(
    {} as Credentials
  );
  const [login] = useLazyQuery<LogInData>(LOG_IN, {
    onCompleted: (data) => {
      localStorage.setItem("mosanoAppToken", data.logIn.token);
      setAuth(data.logIn.logged);
      if (data.logIn.logged) {
        navigate("/");
      }
    },
  });

  const handleChange = (e: React.SyntheticEvent) => {
    const event = e.currentTarget as HTMLTextAreaElement;
    setCreadentials((state) => ({
      ...state,
      [event.name]: event.value,
    }));
  };

  const handleClick = () => {
    login({
      variables: {
        username: credentials.username,
        password: credentials.password,
      },
    });
  };

  return (
    <Box>
      <StyledContainer>
        <StyledStack direction="column" spacing={5}>
          <TextField
            label={intl.formatMessage({ id: "username" })}
            name="username"
            onChange={handleChange}
          />
          <TextField
            label={intl.formatMessage({ id: "password" })}
            type="password"
            name="password"
            onChange={handleChange}
          />
          <StyledButtonContainer>
            <StyledButton variant="outlined" onClick={handleClick}>
              {intl.formatMessage({ id: "login" })}
            </StyledButton>
          </StyledButtonContainer>
        </StyledStack>
      </StyledContainer>
    </Box>
  );
}

export default Login;
