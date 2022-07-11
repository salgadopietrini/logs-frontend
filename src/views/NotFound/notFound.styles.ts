import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const StyledContainer = styled("div")({
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledTypography = styled(Typography)({
  color: "grey",
  fontWeight: "lighter",
  fontSize: "20px",
});
