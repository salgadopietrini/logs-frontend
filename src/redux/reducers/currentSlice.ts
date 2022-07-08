import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  surname: string;
  country: string;
  birthday: Date | null;
}

const initialState: UserState = {
  name: "Alenjandro",
  surname: "Leon",
  country: "India",
  birthday: new Date(1994, 8, 9),
};

export const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrent: (_, action: PayloadAction<UserState>) => action.payload,
  },
});

export const { setCurrent } = currentSlice.actions;

export default currentSlice.reducer;
