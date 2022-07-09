import React from "react";
import { Container } from "@mui/material";
import { LayoutProps } from "../../utils/types";

function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="xl" disableGutters>
      {children}
    </Container>
  );
}

export default Layout;
