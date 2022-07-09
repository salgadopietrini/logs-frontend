import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../utils/types";

const initialState: UserState = {
  name: "",
  surname: "",
  country: "",
  birthday: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setBirthday: (state, action: PayloadAction<Date | null>) => {
      state.birthday = action.payload;
    },
  },
});

export const { setName, setSurname, setCountry, setBirthday } =
  userSlice.actions;

export default userSlice.reducer;
