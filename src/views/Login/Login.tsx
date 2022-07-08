import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

import {
  StyledContainer,
  StyledStack,
  StyledButtonContainer,
  StyledButton,
} from "./login.styles";

function Login() {
  return (
    <Box>
      <StyledContainer>
        <StyledStack direction="column" spacing={5}>
          <TextField label="Username" />
          <TextField label="Password" type="password" />
          <StyledButtonContainer>
            <StyledButton variant="outlined">Log in</StyledButton>
          </StyledButtonContainer>
        </StyledStack>
      </StyledContainer>
    </Box>
  );
}

export default Login;
