import TrackingNavbar from "../components/TrackingNavbar";

import ShipmentGeneralInformation from "../components/ShipmentGeneralInformation";
import ShipmentStepper from "../components/ShipmentStepper";
import ShipmentLocation from "../components/ShipmentLocation";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";


const ShipmentDetails = () => {
  const isLoading = useSelector(state => state.isLoading.value);
  const data = useSelector(state => state.data.value);

  return (
    <div>
      
      <TrackingNavbar />

      {
        isLoading? 
        (
          <div className="w-[100vw] h-[50vh] flex items-center justify-center">
          <p><FormattedMessage defaultMessage="Loading please wait....." id="loading.wait"/></p>
        </div>
        )
        :
        (
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
     
        )
      }
      
    </div>
  );
};

export default ShipmentDetails;
