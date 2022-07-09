import { format } from "date-fns";

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

export const getGreetingMessage = (
  name: string,
  country: string,
  birthday: Date,
  years: number
) =>
  `Hello ${name} from ${country},  ${
    years > 0
      ? `on day ${format(birthday!, "d")} of month ${format(birthday!, "M")} you
will have ${years} years`
      : `this day (${format(birthday!, "d")} of month ${format(
          birthday!,
          "M"
        )}) is your birthday, you are now ${-years} years old, happy birthday!`
  }`;

export const getDateFromString = (date: string) => {
  const dateParts = date.split("/");
  return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
};

export const validateFilledForm = (
  name: string,
  surname: string,
  country: string,
  birthday: Date | null
) => name === "" || surname === "" || country === "" || birthday === null;
