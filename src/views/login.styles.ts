import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const StyledContainer = styled("div")({
  paddingTop: "20vh",
  display: "flex",
  justifyContent: "center",
});

export const StyledStack = styled(Stack)({
  width: "80%",
  textAlign: "center",
});

export const StyledButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const StyledButton = styled(Button)({
  width: "50%",
});
