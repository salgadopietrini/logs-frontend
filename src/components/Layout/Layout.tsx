import React, { useContext } from "react";
import { useIntl } from "react-intl";
import Toolbar from "@mui/material/Toolbar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Container } from "@mui/material";
import { GrLogout } from "react-icons/gr";
import AppBar from "@mui/material/AppBar";
import {
  StyledIconButton,
  StyledContainer,
  StyledFooter,
  StyledTypography,
} from "./layout.styles";
import { ChildrenAsProps } from "../../utils/types";
import { Context } from "../../AppProvider";

function Layout({ children }: ChildrenAsProps) {
  const intl = useIntl();
  const { auth, handleLang, setAuth } = useContext(Context);
  const handleLogOut = () => {
    localStorage.removeItem("mosanoAppToken");
    setAuth(false);
  };
  return (
    <Container maxWidth="xl" disableGutters>
      <StyledContainer>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <ToggleButtonGroup>
              <ToggleButton value="web" onClick={() => handleLang("en")}>
                EN
              </ToggleButton>
              <ToggleButton value="android" onClick={() => handleLang("pt")}>
                PT
              </ToggleButton>
            </ToggleButtonGroup>
            {auth && (
              <StyledIconButton color="inherit" onClick={handleLogOut}>
                <GrLogout />
              </StyledIconButton>
            )}
          </Toolbar>
        </AppBar>
        {children}
      </StyledContainer>
      <StyledFooter>
        <StyledTypography>
          {intl.formatMessage({ id: "credits" })}
        </StyledTypography>
      </StyledFooter>
    </Container>
  );
}

export default Layout;
