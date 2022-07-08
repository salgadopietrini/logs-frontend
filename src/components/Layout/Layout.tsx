import { Container } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Container maxWidth="xl" disableGutters>
      {children}
    </Container>
  );
}

export default Layout;
