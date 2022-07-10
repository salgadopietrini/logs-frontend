import React, { useContext } from "react";
import { Container } from "@mui/material";
import { LayoutProps } from "../../utils/types";
import { Context } from "../../App";

function Layout({ children }: LayoutProps) {
  const { handleLang } = useContext(Context);
  return (
    <Container maxWidth="xl" disableGutters>
      <div>
        <button onClick={() => handleLang("en")} type="button">
          EN
        </button>
        <button onClick={() => handleLang("pt")} type="button">
          PT
        </button>
      </div>
      {children}
    </Container>
  );
}

export default Layout;
