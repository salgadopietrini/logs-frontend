import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  surname: string;
  country: string;
  birthday: Date | null;
}

const initialState: UserState[] = [
  {
    name: "Manuel",
    surname: "Salgado",
    country: "Venezuela",
    birthday: new Date(1994, 10, 14),
  },
  {
    name: "Hellen",
    surname: "Torres",
    country: "Siria",
    birthday: new Date(1994, 5, 7),
  },
  {
    name: "Alenjandro",
    surname: "Leon",
    country: "India",
    birthday: new Date(1994, 8, 9),
  },
  {
    name: "Rosa",
    surname: "Martínez",
    country: "Perú",
    birthday: new Date(1981, 25, 3),
  },
];

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

/* export const { setName, setSurname, setCountry, setBirthday } =
  userSlice.actions; */

export default listSlice.reducer;
