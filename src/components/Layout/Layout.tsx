import React, { useContext } from "react";
import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { GrLogout } from "react-icons/gr";
import AppBar from "@mui/material/AppBar";
import { StyledIconButton } from "./layout.styles";
import { ChildrenAsProps } from "../../utils/types";
import { Context } from "../../App";

function Layout({ children }: ChildrenAsProps) {
  const { auth, handleLang, setAuth } = useContext(Context);
  return (
    <Container maxWidth="xl" disableGutters>
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
            <StyledIconButton color="inherit" onClick={() => setAuth(false)}>
              <GrLogout />
            </StyledIconButton>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
}

export default Layout;
