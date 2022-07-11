import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import { IoIosClose } from "react-icons/io";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
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

  const [credentials, setCreadentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    status: false,
    type: "",
  });
  const [login] = useLazyQuery<LogInData>(LOG_IN, {
    onCompleted: (data) => {
      localStorage.setItem("mosanoAppToken", data.logIn.token);
      setAuth(data.logIn.logged);
      if (data.logIn.logged) {
        navigate("/");
      }
    },
    onError: (err) => {
      setLoading(false);
      if (err.message === "Response not successful: Received status code 500") {
        setAlert(() => ({ type: "auth", status: true }));
      } else if (err.message === "Failed to fetch") {
        setAlert(() => ({ type: "connection", status: true }));
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
    setAlert((state) => ({ ...state, status: false }));
    setLoading(true);
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
            <StyledButton
              variant="outlined"
              onClick={handleClick}
              disabled={
                credentials.password === "" || credentials.username === ""
              }
            >
              {intl.formatMessage({ id: "login" })}
            </StyledButton>
          </StyledButtonContainer>
          {loading && <LinearProgress />}
          {alert.status && (
            <Alert
              severity={alert.type === "connection" ? "error" : "warning"}
              action={
                <IconButton
                  size="small"
                  onClick={() => {
                    setAlert((state) => ({ ...state, status: false }));
                  }}
                >
                  <IoIosClose />
                </IconButton>
              }
            >
              {intl.formatMessage({
                id:
                  alert.type === "connection" ? "connectionError" : "authError",
              })}
            </Alert>
          )}
        </StyledStack>
      </StyledContainer>
    </Box>
  );
}

export default Login;
