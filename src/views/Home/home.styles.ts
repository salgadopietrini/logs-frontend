import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  display: "flex",
  height: "100vh",

  justifyContent: "space-around",
  "@media (max-width: 1080px)": {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const StyledLeftContainer = styled("div")({
  width: "30%",
  alignSelf: "center",
  "@media (max-width: 1080px)": {
    width: "80%",
    marginBottom: "30px",
  },
});

export const StyledRightContainer = styled("div")({
  paddingTop: "250px",
  width: "50%",
  "@media (max-width: 1300px)": {
    width: "60%",
  },
  "@media (max-width: 1080px)": {
    paddingTop: "0",
    width: "80%",
  },
});
