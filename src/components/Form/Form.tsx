import React, { useState, useContext } from "react";
import { useIntl } from "react-intl";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import isAlpha from "validator/lib/isAlpha";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { GET_USERS } from "../../apollo/queries";
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
  Country,
  FormProps,
} from "../../utils/types";
import { validateFilledForm } from "../../utils/actions";
import { Context } from "../../App";

function Form({ countries }: FormProps) {
  const intl = useIntl();
  const { lang } = useContext(Context);
  const { name, surname, country, birthday } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch();
  const [errors, setErrors] = useState<UserValidationErrors>({
    name: false,
    surname: false,
    country: false,
    birthday: false,
  });
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
  });

  const handleSave = async () => {
    if (!isAlpha(name)) {
      setErrors((state) => ({
        ...state,
        name: true,
      }));
    }
    if (!isAlpha(surname)) {
      setErrors((state) => ({
        ...state,
        surname: true,
      }));
    }
    if (!isAlpha(country)) {
      setErrors((state) => ({
        ...state,
        country: true,
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
      [e.target.name]: false,
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
            label={intl.formatMessage({ id: "name" })}
            name="name"
            value={name}
            required
            error={errors.name}
            helperText={errors.name && intl.formatMessage({ id: "nameError" })}
            onChange={handleChange}
          />
          <TextField
            label={intl.formatMessage({ id: "surname" })}
            name="surname"
            value={surname}
            required
            error={errors.surname}
            helperText={
              errors.surname && intl.formatMessage({ id: "surnameError" })
            }
            onChange={handleChange}
          />
          <TextField
            label={intl.formatMessage({ id: "country" })}
            name="country"
            select
            value={country}
            required
            error={errors.country}
            helperText={
              errors.country && intl.formatMessage({ id: "countryError" })
            }
            defaultValue=""
            onChange={handleChange}
          >
            {countries.loading
              ? []
              : countries.data?.countries.map((elem: Country) => (
                  <MenuItem value={elem.code} key={elem.code}>
                    {elem.name[lang]}
                  </MenuItem>
                ))}
          </TextField>
          <DesktopDatePicker
            label={intl.formatMessage({ id: "birthday" })}
            inputFormat="dd/MM/yyyy"
            value={birthday}
            onChange={(e) => dispatch(setBirthday(e))}
            renderInput={(params) => (
              <TextField
                {...params}
                name="birthday"
                required
                error={errors.birthday}
                helperText={
                  errors.birthday && intl.formatMessage({ id: "birthdayError" })
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
              {intl.formatMessage({ id: "save" })}
            </StyledButton>
          </StyledButtonContainer>
        </StyledStack>
      </StyledContainer>
    </Box>
  );
}

export default Form;
