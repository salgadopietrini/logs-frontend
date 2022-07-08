import React from "react";
import Alert from "@mui/material/Alert";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { getYearsAtNextBirthday } from "../../utils/getYearsAtNextBirthday";

function Greeting() {
  const { name, country, birthday } = useSelector(
    (state: RootState) => state.current
  );
  const years = getYearsAtNextBirthday(birthday!);
  return (
    <Alert severity="success" icon={false}>
      {`Hello ${name} from ${country},  ${
        years > 0
          ? `on day ${format(birthday!, "d")} of month ${format(
              birthday!,
              "M"
            )} you
    will have ${years} years`
          : `this day (${format(birthday!, "d")} of month ${format(
              birthday!,
              "M"
            )}) is your birthday, you are now ${-years} years old, happy birthday!`
      }`}
    </Alert>
  );
}

export default Greeting;
