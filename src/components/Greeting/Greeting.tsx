import React from "react";
import Alert from "@mui/material/Alert";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export const getYearsAtNextBirthday = (birthdate: Date): number => {
  const birthYear = +format(birthdate, "yyyy");
  const birthMonth = +format(birthdate, "M");
  const birthDay = +format(birthdate, "d");
  const currentYear = +format(new Date(), "yyyy");
  const currentMonth = +format(new Date(), "M");
  const currentDay = +format(new Date(), "d");
  const distanceYear = currentYear - birthYear;
  const distanceMonth = currentMonth - birthMonth;
  const distanceDay = currentDay - birthDay;
  if (distanceMonth === 0 && distanceMonth === 0 && distanceDay === 0) {
    return -distanceYear;
  }
  if (distanceMonth < 0 || (distanceMonth === 0 && distanceDay < 0)) {
    return distanceYear;
  }
  return distanceYear + 1;
};

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
