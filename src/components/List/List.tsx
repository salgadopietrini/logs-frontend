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
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

function List() {
  const users = useSelector((state: RootState) => state.list);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Birthday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((elem) => (
            <TableRow key={`${elem.name}${elem.surname}`}>
              <TableCell>{`${elem.name} ${elem.surname}`}</TableCell>
              <TableCell>{elem.country}</TableCell>
              <TableCell>{elem.birthday?.toString()}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <ImCancelCircle />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
