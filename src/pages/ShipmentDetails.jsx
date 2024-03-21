import TrackingNavbar from "../components/TrackingNavbar";

import ShipmentGeneralInformation from "../components/ShipmentGeneralInformation";
import ShipmentStepper from "../components/ShipmentStepper";
import ShipmentLocation from "../components/ShipmentLocation";
import Table from "../components/Table";
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../features/dataSlice";
import { setIsLoading } from "../features/isLoadingSlice";


const ShipmentDetails = () => {
  // console.log(isLoading)
  const isLoading = useSelector(state => state.isLoading.value);
  const apiData = useSelector((state) => state.data.value);

  console.log(apiData)

  return (
    <div>
      
      <TrackingNavbar />

      {
        isLoading? 
        (<p>Loading please wait.....</p>)
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
