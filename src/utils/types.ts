import React from "react";

export { RootState, AppDispatch } from "../redux/store";

export type Languages = "en" | "pt";

export interface UserQuery {
  id: string;
  name: string;
  surname: string;
  country: string;
  birthday: string;
}

export interface UserQueryData {
  users: UserQuery[];
}

export interface Country {
  name: string;
}

export interface CountryData {
  countries: Country[];
}

export interface UserState {
  defined?: boolean;
  name: string;
  surname: string;
  country: string;
  birthday: Date | null;
}

export interface Error {
  status: boolean;
  message: string;
}

export interface UserValidationErrors {
  name: Error;
  surname: Error;
  country: Error;
  birthday: Error;
}

export interface GreetingProps {
  data: UserState;
}

export interface LayoutProps {
  children: React.ReactNode;
  setLang: React.Dispatch<React.SetStateAction<Languages>>;
}

export interface ListProps {
  users: UserQuery[];
}
