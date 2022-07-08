import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "space-around",
  "@media (max-width: 1080px)": {
    flexDirection: "column",
    justifyContent: "center",
  },
});
export const StyledLeftContainer = styled("div")({
  width: "30%",
  "@media (max-width: 1080px)": {
    width: "80%",
  },
});
export const StyledRightContainer = styled("div")({
  width: "50%",
  "@media (max-width: 1300px)": {
    width: "60%",
  },
  "@media (max-width: 1080px)": {
    width: "80%",
  },
});
