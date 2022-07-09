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
import { useDispatch } from "react-redux";
import { DELETE_USER, useMutation } from "../../apollo/mutations";
import { GET_USERS, User } from "../../apollo/queries";
import { StyledTableRow, StyledTableCell } from "./list.styles";
import { setCurrent } from "../../redux/reducers/currentSlice";

interface Props {
  users: User[];
}

function List({ users }: Props) {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
  });
  const dispatch = useDispatch();

  const handleButtonClick = (e: React.SyntheticEvent, id: string) => {
    e.stopPropagation();
    deleteUser({ variables: { deleteUserId: id } });
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
          {users.map((elem: User) => (
            <StyledTableRow
              key={elem.id}
              /* onClick={() => dispatch(setCurrent(elem))} */
            >
              <TableCell>{`${elem.name} ${elem.surname}`}</TableCell>
              <TableCell>{elem.country}</TableCell>
              <TableCell>{elem.birthday}</TableCell>
              <TableCell align="center">
                <IconButton onClick={(e) => handleButtonClick(e, elem.id)}>
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
