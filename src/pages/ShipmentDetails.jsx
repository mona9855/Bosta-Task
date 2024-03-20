import React, { useEffect } from "react";
import TrackingNavbar from "../components/TrackingNavbar";
import { useSnapshot } from "valtio";
import state from "../store";
import ShipmentGeneralInformation from "../components/ShipmentGeneralInformation";
import ShipmentStepper from "../components/ShipmentStepper";
import ShipmentLocation from "../components/ShipmentLocation";
import { Table } from "antd";

const ShipmentDetails = () => {
  const snap = useSnapshot(state);


  useEffect(() => {
    fetch(`https://tracking.bosta.co/shipments/track/${snap.trackingNumber}`)
      .then((response) => response.json())
      .then((data) => (state.data = data))
      .catch((error) =>
        console.error("error fetching shipment details", error)
      );
  }, [snap.trackingNumber]);
  

  return (
    <div>
      <TrackingNavbar />

      <div className="mt-10">
        {/* Shipment details general information */}
        <ShipmentGeneralInformation />

        {/* Stepper */}
        <ShipmentStepper />

        {/* Shipment details table and delivery location */}
        <div className="flex justify-between lg:flex-col mt-6 p-4 gap-4">
        <ShipmentLocation />
        <Table />
        </div>
      </div>
      
    </div>
  );
};

export default ShipmentDetails;
