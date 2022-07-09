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
import { GET_USERS } from "../../apollo/queries";
import { StyledTableRow, StyledTableCell } from "./list.styles";
import { setCurrent, resetCurrent } from "../../redux/reducers/currentSlice";
import { ListProps, UserQuery } from "../../utils/types";
import { getDateFromString } from "../../utils/actions";

function List({ users }: ListProps) {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }, "GetUsers"],
  });
  const dispatch = useDispatch();

  const handleDeleteButtonClick = async (
    e: React.SyntheticEvent,
    id: string
  ) => {
    e.stopPropagation();
    await deleteUser({ variables: { deleteUserId: id } });
    dispatch(resetCurrent());
  };

  const handleRowClick = (user: UserQuery) => {
    dispatch(
      setCurrent({
        name: user.name,
        surname: user.surname,
        country: user.country,
        birthday: getDateFromString(user.birthday!),
      })
    );
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 450,
      }}
    >
      <Table sx={{ minWidth: 50 }} size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>Birthday</StyledTableCell>
            <StyledTableCell> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((elem: UserQuery) => (
            <StyledTableRow key={elem.id} onClick={() => handleRowClick(elem)}>
              <TableCell>{`${elem.name} ${elem.surname}`}</TableCell>
              <TableCell>{elem.country}</TableCell>
              <TableCell>{elem.birthday}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={(e) => handleDeleteButtonClick(e, elem.id)}
                >
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
