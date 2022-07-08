import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import {
  StyledContainer,
  StyledStack,
  StyledButtonContainer,
  StyledButton,
} from "./form.styles";

function Form() {
  const [value, setValue] = React.useState<Date | null>(null);
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledContainer>
        <StyledStack direction="column" spacing={2}>
          <TextField label="Name" />
          <TextField label="Surname" />
          <TextField label="Countries" select>
            <MenuItem value="Venezuela">Venezuela</MenuItem>
            <MenuItem value="Portugal">Portugal</MenuItem>
            <MenuItem value="Perú">Perú</MenuItem>
          </TextField>
          <DesktopDatePicker
            label="Birthday"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleChange}
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
