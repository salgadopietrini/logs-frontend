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

interface User {
  name: string;
  surname: string;
  country: string;
  birthday: Date;
}

const users: User[] = [
  {
    name: "Manuel",
    surname: "Salgado",
    country: "Venezuela",
    birthday: new Date(1994, 10, 14),
  },
  {
    name: "Hellen",
    surname: "Torres",
    country: "Siria",
    birthday: new Date(1994, 5, 7),
  },
  {
    name: "Alenjandro",
    surname: "Leon",
    country: "India",
    birthday: new Date(1994, 8, 9),
  },
  {
    name: "Rosa",
    surname: "Martínez",
    country: "Perú",
    birthday: new Date(1981, 25, 3),
  },
];

function List() {
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
              <TableCell>{elem.birthday.getDate()}</TableCell>
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
