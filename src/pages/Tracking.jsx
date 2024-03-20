import React from "react";
import TrackingNavbar from "../components/TrackingNavbar";

import location from "../assets/location.png";
import valueWord from "../assets/valueWord.png";
import valueLogo from "../assets/valueLogo.png";
import { FormattedMessage } from "react-intl";
import Search from "../components/Search";

const Tracking = () => {
  return (
    <div>
      <TrackingNavbar />

      {/* Track your order section */}
      <div className="px-4 py-10 relative">
        <div className="bg-[#f3fafb] flex flex-col  justify-center items-center">
          <div>
            <img src={location} alt="tracking-icon" />
          </div>

          <h1 className="text-5xl xs:text-2xl xxs:text-xl font-semibold  mb-6 text-center">
            <FormattedMessage
              id="tracking.header"
              defaultMessage="Track Your Order"
            />
          </h1>

          <p className="text-sm xxs:text-xs mb-16 text-center">
            <FormattedMessage
              id="tracking.paragraph"
              defaultMessage="All order updates will be available through this link."
            />
          </p>

          {/* Search input */}
          <Search />
        </div>
      </div>

      <span className="bg-[#f3fafb] h-[10px] block" />

      {/* Valu Section */}
      <div className="mt-8 flex flex-row xs:flex-col items-center justify-between py-3 px-2 m-auto w-[80%] border-2 border-slate-300 rounded-xl">
        <div className="flex flex-col gap-1">
          <div>
            <img src={valueWord} alt="value" className=" object-contain" />
          </div>
          <p className="mt-2 sm:text-base xxs:text-xs">
            <FormattedMessage
              id="tracking.valu"
              defaultMessage="You can now ask the courier to pay with valu for your orders with 0% Managment fees."
            />
          </p>
        </div>

        <img
          src={valueLogo}
          alt="value logo"
          className="w-[100px] xxs:w-[70px] xs:w-[90px] object-contain"
        />
      </div>
    </div>
  );
};

export default Tracking;
