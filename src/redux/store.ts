import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import listReducer from "./reducers/listSlice";
import currentSlice from "./reducers/currentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
    current: currentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
