import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../utils/types";

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
