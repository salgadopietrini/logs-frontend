import React from "react";
import { StyledPaper } from "./greeting.styles";

interface User {
  name: string;
  surname: string;
  country: string;
  birthday: Date;
}

const user: User = {
  name: "Manuel",
  surname: "Salgado",
  country: "Venezuela",
  birthday: new Date("14/10/1994"),
};

function Greeting() {
  return (
    <StyledPaper elevation={2}>
      {`Hello ${user.name} from ${user.country}, on day ${user.birthday} of month ${user.birthday} you
      will have ${user.birthday} years`}
    </StyledPaper>
  );
}

export default Greeting;
