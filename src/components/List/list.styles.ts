import { styled } from "@mui/system";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const StyledTableRow = styled(TableRow)({
  "&:hover": {
    background: "#F6F6F6",
    cursor: "pointer",
  },
});

export const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
});
