import React, { Suspense } from "react";
import TrackingNavbar from "../components/TrackingNavbar";

import ShipmentGeneralInformation from "../components/ShipmentGeneralInformation";
import ShipmentStepper from "../components/ShipmentStepper";
import ShipmentLocation from "../components/ShipmentLocation";
import Table from "../components/Table";
import Loader from "../components/Loader";


const ShipmentDetails = () => {


  return (
    <div>
      <Suspense fallback={<Loader />}>
      <TrackingNavbar />

      <div className="mt-10">
        {/* Shipment details general information */}
        <ShipmentGeneralInformation />

        {/* Stepper */}
        <ShipmentStepper />

        {/* Shipment details table and delivery location */}
        <div className="flex justify-between lg:flex-col mt-6 p-4 gap-4">
          <Table />
          <ShipmentLocation />
        </div>
      </div>
      </Suspense>
    </div>
  );
};

export default ShipmentDetails;
