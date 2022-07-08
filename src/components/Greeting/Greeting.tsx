import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

function Greeting() {
  const user = useSelector((state: RootState) => state.current);
  return (
    <Alert severity="success" icon={false}>
      {`Hello ${user.name} from ${user.country}, on day ${user.birthday} of month ${user.birthday} you
    will have ${user.birthday} years`}
    </Alert>
  );
}

export default Greeting;
