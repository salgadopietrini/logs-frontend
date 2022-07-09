import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import currentSlice from "./reducers/currentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    current: currentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
