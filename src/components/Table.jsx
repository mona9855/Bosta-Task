import React from "react";
import { FormattedMessage } from "react-intl";

import { apiArabicData } from "../translations/apiArabicData";
import moment from "moment";
import { useSelector } from "react-redux";

const Table = () => {
    const language = useSelector(state => state.selectedLanguage.value);
    const data = useSelector(state => state.data.value);

  const english = language === "en" ? true : false;
  const apiData = english ? data.TransitEvents : apiArabicData;
  const shipmentStatus = data.CurrentStatus.state;

  let reasonColor;
  if (shipmentStatus === "DELIVERED") {
    reasonColor = "text-green-600";
  } else if (shipmentStatus === "CANCELLED") {
    reasonColor = "text-yellow-600";
  } else {
    reasonColor = "text-red-600";
  }

  let fontClass;
  if(english) {
    fontClass = 'font-poppins';
  } else {
    fontClass = 'font-cairo';
  }

  return (
    <div className="font-bold">
      <h1>
        <FormattedMessage
          defaultMessage="Shipment Details"
          id="shpment.details"
        />
      </h1>

      <div className={`mt-4 ${fontClass} font-normal overflow-x-auto`}>
        <table className="w-[100%]">
          <thead className=" bg-slate-300 rounded-xl text-center">
            <tr >
              <th scope="col" className="p-5">
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
              <tr key={row.timestamp} className="text-center">
                <td className="p-4">{row.hub ? row.hub : "🚗"}</td>
                <td className="p-4">{moment(row.timestamp).format("M/DD/YYYY")}</td>
                <td className="p-4">{moment(row.timestamp).format("LT")}</td>
                <td className="p-4">
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
