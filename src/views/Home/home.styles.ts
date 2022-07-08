import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const StyledContainer = styled("div")({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledStack = styled(Stack)({
  width: "80%",
});
