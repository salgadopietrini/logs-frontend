import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const StyledIconButton = styled(IconButton)({
  marginLeft: "auto",
});

export const StyledContainer = styled("div")({
  minHeight: "100vh",
});

export const StyledFooter = styled("footer")({
  clear: "both",
  position: "relative",
  height: "40px",
  marginTop: "-40px",
  display: "flex",
  paddingRight: "20px",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const StyledTypography = styled(Typography)({
  color: "grey",
  fontWeight: "lighter",
  fontSize: "14px",
});
