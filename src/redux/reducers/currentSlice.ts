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
    resetCurrent: () => initialState,
  },
});

export const { setCurrent, resetCurrent } = currentSlice.actions;

export default currentSlice.reducer;
