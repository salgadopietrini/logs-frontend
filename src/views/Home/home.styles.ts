import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  "@media (max-width: 1080px)": {
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const StyledLeftContainer = styled("div")({
  width: "30%",
  paddingTop: "22vh",
  "@media (max-width: 1080px)": {
    paddingTop: "0",
    width: "80%",
    marginBottom: "30px",
  },
});

export const StyledRightContainer = styled("div")({
  paddingTop: "22vh",
  width: "50%",
  "@media (max-width: 1300px)": {
    width: "60%",
  },
  "@media (max-width: 1080px)": {
    paddingTop: "0",
    width: "80%",
    marginBottom: "30px",
  },
});
