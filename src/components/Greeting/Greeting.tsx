import React from "react";
import Alert from "@mui/material/Alert";

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
    <Alert severity="success" icon={false}>
      {`Hello ${user.name} from ${user.country}, on day ${user.birthday} of month ${user.birthday} you
    will have ${user.birthday} years`}
    </Alert>
  );
}

export default Greeting;
