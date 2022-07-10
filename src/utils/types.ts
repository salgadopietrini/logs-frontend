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
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ListProps {
  users: UserQuery[];
  countries: Country[];
}

export interface FormProps {
  countries: QueryResult;
}
