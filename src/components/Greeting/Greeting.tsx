import React from "react";
import { useIntl } from "react-intl";
import Alert from "@mui/material/Alert";
import { GreetingProps } from "../../utils/types";
import {
  getYearsAtNextBirthday,
  getGreetingMessage,
} from "../../utils/actions";

function Greeting({ data }: GreetingProps) {
  const intl = useIntl();
  const { name, country, birthday } = data;
  const years = getYearsAtNextBirthday(birthday!);
  return (
    <Alert severity="success" icon={false}>
      {getGreetingMessage(name, country, birthday!, years, intl.locale)}
    </Alert>
  );
}

export default Greeting;
