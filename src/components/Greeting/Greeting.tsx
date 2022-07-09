import React from "react";
import Alert from "@mui/material/Alert";
import { format } from "date-fns";
import { UserState } from "../../redux/reducers/currentSlice";
import { getYearsAtNextBirthday } from "../../utils/getYearsAtNextBirthday";

interface Props {
  data: UserState;
}

function Greeting({ data }: Props) {
  const { name, country, birthday } = data;
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
