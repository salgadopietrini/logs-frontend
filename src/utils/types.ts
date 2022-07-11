import React from "react";
import { QueryResult } from "@apollo/client";

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

export interface CountryName {
  en: string;
  pt: string;
}

export interface Country {
  name: CountryName;
  code: string;
}

export interface CountryData {
  countries: Country[];
}

export interface LogIn {
  token: string;
  logged: boolean;
}

export interface LogInData {
  logIn: LogIn;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface UserState {
  defined?: boolean;
  name: string;
  surname: string;
  country: string;
  birthday: Date | null;
}

export interface UserValidationErrors {
  name: boolean;
  surname: boolean;
  country: boolean;
  birthday: boolean;
}

export interface GreetingProps {
  data: UserState;
  countries: Country[];
}

export interface ChildrenAsProps {
  children: React.ReactNode;
}

export interface LoginProps {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ListProps {
  users: UserQuery[];
  countries: Country[];
}

export interface FormProps {
  countries: QueryResult;
}

export interface ContextState {
  lang: Languages;
  handleLang: (value: Languages) => void;
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
