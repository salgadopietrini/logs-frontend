import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import {
  setName,
  setSurname,
  setCountry,
  setBirthday,
} from "../../redux/reducers/userSlice";
import {
  StyledContainer,
  StyledStack,
  StyledButtonContainer,
  StyledButton,
} from "./form.styles";

function Form() {
  const { name, surname, country, birthday } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <StyledContainer>
        <StyledStack direction="column" spacing={2}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <TextField
            label="Surname"
            value={surname}
            onChange={(e) => dispatch(setSurname(e.target.value))}
          />
          <TextField
            label="Countries"
            select
            value={country}
            defaultValue=""
            onChange={(e) => dispatch(setCountry(e.target.value))}
          >
            <MenuItem value="Venezuela">Venezuela</MenuItem>
            <MenuItem value="Portugal">Portugal</MenuItem>
            <MenuItem value="Perú">Perú</MenuItem>
          </TextField>
          <DesktopDatePicker
            label="Birthday"
            inputFormat="dd/MM/yyyy"
            value={birthday}
            onChange={(e) => dispatch(setBirthday(e))}
            renderInput={(params) => <TextField {...params} />}
          />
          <StyledButtonContainer>
            <StyledButton variant="outlined">Save</StyledButton>
          </StyledButtonContainer>
        </StyledStack>
      </StyledContainer>
    </Box>
  );
}

export default Form;
