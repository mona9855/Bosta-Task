import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import moment from "moment";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  tableCellClasses,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import { apiArabicData } from "../translations/apiArabicData";

const ShipmentDetailsTable = () => {
  const snap = useSnapshot(state);
  let reasonColor;
  const shipmentStatus = snap.data.CurrentStatus.state;
  const language = snap.selectedLanguage;
  const english = language === "en" ? true : false;
  const apiData = english? snap.data.TransitEvents : apiArabicData;

  if (shipmentStatus === "DELIVERED") {
    reasonColor = "text-green-600";
  } else if (shipmentStatus === "CANCELLED") {
    reasonColor = "text-yellow-600";
  } else {
    reasonColor = "text-red-600";
  }

  const theme = createTheme({
    typography: {
      fontFamily: [language === "en" ? "poppins" : "cairo"].join(","),
    },
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="font-bold">
      <h1><FormattedMessage defaultMessage="Shipment Details" id="shpment.details"/></h1>

      <div className="mt-4">
        <ThemeProvider theme={theme}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, fontFamily: "poppins" }}
              aria-label="simple table"
            >
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center" sx={{ color: "darkgray" }}>
                    <FormattedMessage defaultMessage="Branch" id="branch" />
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "darkgray" }}>
                    <FormattedMessage defaultMessage="Date" id="date" />
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "darkgray" }}>
                    <FormattedMessage defaultMessage="Time" id="time" />
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ color: "darkgray" }}>
                    <FormattedMessage defaultMessage="Details" id="details" />
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {apiData.map((row) => (
                  <StyledTableRow
                    key={row.timestamp}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.hub ? row.hub : "🚗"}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {moment(row.timestamp).format("M/DD/YYYY")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {moment(row.timestamp).format("LT")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.state.replace(/_/g, " ")} <br />{" "}
                      <span className={reasonColor}>{row.reason}</span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ShipmentDetailsTable;
