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
