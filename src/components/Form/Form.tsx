import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import isAlpha from "validator/lib/isAlpha";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { GET_COUNTRIES, GET_USERS, useQuery } from "../../apollo/queries";
import { CREATE_USER, useMutation } from "../../apollo/mutations";
import {
  setName,
  setSurname,
  setCountry,
  setBirthday,
  resetForm,
} from "../../redux/reducers/userSlice";
import { setCurrent } from "../../redux/reducers/currentSlice";
import {
  StyledContainer,
  StyledStack,
  StyledButtonContainer,
  StyledButton,
} from "./form.styles";
import {
  UserValidationErrors,
  RootState,
  CountryData,
} from "../../utils/types";
import { validateFilledForm } from "../../utils/actions";

function Form() {
  const { name, surname, country, birthday } = useSelector(
    (state: RootState) => state.user
  );
  const countries = useQuery<CountryData>(GET_COUNTRIES);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<UserValidationErrors>({
    name: { status: false, message: "Name must be a word" },
    surname: { status: false, message: "Surname must be a word" },
    country: { status: false, message: "Country must be one of the list" },
    birthday: { status: false, message: "Birthday must be a date" },
  });
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
  });

  const handleSave = async () => {
    if (!isAlpha(name)) {
      setErrors((state) => ({
        ...state,
        name: { ...state.name, status: true },
      }));
    }
    if (!isAlpha(surname)) {
      setErrors((state) => ({
        ...state,
        surname: { ...state.surname, status: true },
      }));
    }
    if (!isAlpha(country)) {
      setErrors((state) => ({
        ...state,
        country: { ...state.country, status: true },
      }));
    }
    if (isAlpha(name) && isAlpha(surname) && isAlpha(surname)) {
      await createUser({
        variables: {
          name,
          surname,
          country,
          birthday: format(birthday!, "dd/MM/yyyy"),
        },
      });

      dispatch(
        setCurrent({
          name,
          surname,
          country,
          birthday,
        })
      );
      dispatch(resetForm());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: {
        ...state[e.target.name as keyof UserValidationErrors],
        status: false,
      },
    }));
    switch (e.target.name) {
      case "name":
        dispatch(setName(e.target.value));
        break;
      case "surname":
        dispatch(setSurname(e.target.value));
        break;
      case "country":
        dispatch(setCountry(e.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <StyledContainer>
        <StyledStack direction="column" spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={name}
            required
            error={errors.name.status}
            helperText={errors.name.status ? errors.name.message : ""}
            onChange={handleChange}
          />
          <TextField
            label="Surname"
            name="surname"
            value={surname}
            required
            error={errors.surname.status}
            helperText={errors.surname.status ? errors.surname.message : ""}
            onChange={handleChange}
          />
          <TextField
            label="Country"
            name="country"
            select
            value={country}
            required
            error={errors.country.status}
            helperText={errors.country.status ? errors.country.message : ""}
            defaultValue=""
            onChange={handleChange}
          >
            {countries.loading
              ? []
              : countries.data?.countries.map((elem) => (
                  <MenuItem value={elem.name} key={elem.name}>
                    {elem.name}
                  </MenuItem>
                ))}
          </TextField>
          <DesktopDatePicker
            label="Birthday"
            inputFormat="dd/MM/yyyy"
            value={birthday}
            onChange={(e) => dispatch(setBirthday(e))}
            renderInput={(params) => (
              <TextField
                {...params}
                name="birthday"
                required
                error={errors.birthday.status}
                helperText={
                  errors.birthday.status ? errors.birthday.message : ""
                }
              />
            )}
          />
          <StyledButtonContainer>
            <StyledButton
              variant="outlined"
              disabled={validateFilledForm(name, surname, country, birthday)}
              onClick={handleSave}
            >
              Save
            </StyledButton>
          </StyledButtonContainer>
        </StyledStack>
      </StyledContainer>
    </Box>
  );
}

export default Form;
