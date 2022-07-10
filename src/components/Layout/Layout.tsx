import React from "react";
import { Container } from "@mui/material";
import { LayoutProps } from "../../utils/types";

function Layout({ children, setLang }: LayoutProps) {
  return (
    <Container maxWidth="xl" disableGutters>
      <div>
        <button onClick={() => setLang("en")} type="button">
          EN
        </button>
        <button onClick={() => setLang("pt")} type="button">
          PT
        </button>
      </div>
      {children}
    </Container>
  );
}

export default Layout;
