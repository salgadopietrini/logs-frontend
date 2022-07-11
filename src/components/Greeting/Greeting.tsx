import React from "react";
import { useIntl } from "react-intl";
import Alert from "@mui/material/Alert";
import { GreetingProps, Languages } from "../../utils/types";
import {
  getYearsAtNextBirthday,
  getGreetingMessage,
  getCountryFromLang,
} from "../../utils/actions";

function Greeting({ data, countries }: GreetingProps) {
  const intl = useIntl();
  const { name, country, birthday } = data;
  const years = getYearsAtNextBirthday(birthday!);

  return (
    <Alert severity="success" icon={false}>
      {getGreetingMessage(
        name,
        getCountryFromLang(countries, country, intl.locale as Languages),
        birthday!,
        years,
        intl.locale
      )}
    </Alert>
  );
}

export default Greeting;
