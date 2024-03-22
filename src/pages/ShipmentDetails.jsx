import TrackingNavbar from "../components/TrackingNavbar";

import ShipmentGeneralInformation from "../components/ShipmentGeneralInformation";
import ShipmentStepper from "../components/ShipmentStepper";
import ShipmentLocation from "../components/ShipmentLocation";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ShipmentDetails = () => {
  const isLoading = useSelector((state) => state.isLoading.value);
  const error = useSelector((state) => state.error.value);

  return error ? (
    <Error />
  ) : (
    <div>
      <TrackingNavbar />

      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default ShipmentDetails;
