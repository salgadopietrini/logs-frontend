import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  defined?: boolean;
  name: string;
  surname: string;
  country: string;
  birthday: Date | null;
}

const initialState: UserState = {
  defined: false,
} as UserState;

export const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    setCurrent: (_, action: PayloadAction<UserState>) => ({
      defined: true,
      ...action.payload,
    }),
  },
});

export const { setCurrent } = currentSlice.actions;

export default currentSlice.reducer;
