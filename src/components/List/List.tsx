import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { ImCancelCircle } from "react-icons/im";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { StyledTableRow, StyledTableCell } from "./list.styles";
import { setCurrent } from "../../redux/reducers/currentSlice";

function List() {
  const users = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  const handleButtonClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    console.log("delete user");
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>Birthday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((elem) => (
            <StyledTableRow
              key={`${elem.name}${elem.surname}`}
              onClick={() => dispatch(setCurrent(elem))}
            >
              <TableCell>{`${elem.name} ${elem.surname}`}</TableCell>
              <TableCell>{elem.country}</TableCell>
              <TableCell>{format(elem.birthday!, "dd/MM/yyyy")}</TableCell>
              <TableCell align="center">
                <IconButton onClick={handleButtonClick}>
                  <ImCancelCircle />
                </IconButton>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
