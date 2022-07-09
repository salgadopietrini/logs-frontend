import React from "react";
import Alert from "@mui/material/Alert";
import { GreetingProps } from "../../utils/types";
import {
  getYearsAtNextBirthday,
  getGreetingMessage,
} from "../../utils/actions";

function Greeting({ data }: GreetingProps) {
  const { name, country, birthday } = data;
  const years = getYearsAtNextBirthday(birthday!);
  return (
    <Alert severity="success" icon={false}>
      {getGreetingMessage(name, country, birthday!, years)}
    </Alert>
  );
}

export default Greeting;
