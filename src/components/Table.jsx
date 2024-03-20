import React from "react";
import { FormattedMessage } from "react-intl";
import { useSnapshot } from "valtio";
import state from "../store";
import { apiArabicData } from "../translations/apiArabicData";
import moment from "moment";

const Table = () => {
  const snap = useSnapshot(state);
  const language = snap.selectedLanguage;
  const english = language === "en" ? true : false;
  const apiData = english ? snap.data.TransitEvents : apiArabicData;
  const shipmentStatus = snap.data.CurrentStatus.state;

  let reasonColor;
  if (shipmentStatus === "DELIVERED") {
    reasonColor = "text-green-600";
  } else if (shipmentStatus === "CANCELLED") {
    reasonColor = "text-yellow-600";
  } else {
    reasonColor = "text-red-600";
  }

  return (
    <div className="font-bold">
      <h1>
        <FormattedMessage
          defaultMessage="Shipment Details"
          id="shpment.details"
        />
      </h1>

      <div className="mt-4">
        <table>
          <thead>
            <tr>
              <th scope="col">
                <FormattedMessage defaultMessage="Branch" id="branch" />
              </th>
              <th scope="col">
                <FormattedMessage defaultMessage="Date" id="date" />
              </th>
              <th scope="col">
                <FormattedMessage defaultMessage="Time" id="time" />
              </th>
              <th scope="col">
                <FormattedMessage defaultMessage="Details" id="details" />
              </th>
            </tr>
          </thead>

          <tbody>
            {apiData.map((row) => (
              <tr key={row.timestamp}>
                <td>{row.hub ? row.hub : "🚗"}</td>
                <td>{moment(row.timestamp).format("M/DD/YYYY")}</td>
                <td>{moment(row.timestamp).format("LT")}</td>
                <td>
                  {row.state.replace(/_/g, " ")} <br />{" "}
                  <span className={reasonColor}>{row.reason}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
