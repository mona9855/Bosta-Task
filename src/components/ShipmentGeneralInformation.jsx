import { useSnapshot } from "valtio";
import state from "../store";
import moment from "moment";
import { FormattedMessage } from "react-intl";


const ShipmentGeneralInformation = () => {
  const snap = useSnapshot(state);
  const language = snap.selectedLanguage;

  const shipmentNumber = snap.trackingNumber;

  const originalShipmentStatus = snap.data.CurrentStatus.state;
  let EnglishShipmentStatus = originalShipmentStatus.replace(/_/g, " ");
  if(language === 'ar') {
    if(originalShipmentStatus === 'DELIVERED' ) {
      EnglishShipmentStatus = 'تم تسليم الشحنة'
    } else if(originalShipmentStatus === 'CANCELLED' ) {
      EnglishShipmentStatus = 'لم يتم تسليم الشحنة'
    } else {
      EnglishShipmentStatus = "تم إلغاء الشحنة"
    }

  }

  const promisedDateFromApi = snap.data.PromisedDate;
  const promisedDate = promisedDateFromApi? moment(promisedDateFromApi).format('LL') : 'N/A';


  const lastUpdateFromApi = snap.data.CurrentStatus.timestamp;
  const lastUpdate = lastUpdateFromApi? moment(lastUpdateFromApi).format('llll') : 'N/A';


  let shipmentStatusColor = '';
  if (originalShipmentStatus === "DELIVERED") {
    shipmentStatusColor = "text-green-600";
  } else if (originalShipmentStatus === "CANCELLED") {
    shipmentStatusColor = "text-yellow-600";
  } else {
    shipmentStatusColor = "text-red-600";
  };

  return (
    <div className="px-4">
      <div className="flex sm:flex-col sm:items-start gap-2 items-center justify-between p-6 border-2 border-gray-300 rounded-tr-xl rounded-tl-xl flex-wrap">
        <div className="flex sm:flex-row  flex-col justify-center gap-2 sm:w-[100%]">
          <h3 className="text-gray-500 text-sm sm:text-xs sm:w-[50%] ">
            <FormattedMessage defaultMessage="Shipment Number" id="shipment.number"/> {shipmentNumber}
          </h3>
          <p className={`font-bold ${shipmentStatusColor} sm:text-xs sm:w-[50%] break-all`}>{EnglishShipmentStatus}</p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-2 sm:w-[100%]">
          <h3 className="text-gray-500 text-sm sm:text-xs sm:w-[50%]">
          <FormattedMessage defaultMessage="Last Update" id="last.update"/>
          </h3>
          <p className="font-bold sm:text-xs sm:w-[50%]">{lastUpdate}</p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-2 sm:w-[100%]">
          <h3 className="text-gray-500 text-sm sm:text-xs sm:w-[50%]">
          <FormattedMessage defaultMessage="Shipment Name" id="shipper.name"/>
          </h3>
          <p className="font-bold sm:text-xs sm:w-[50%]">Souq.com</p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-2 sm:w-[100%]">
          <h3 className="text-gray-500 text-sm sm:text-xs sm:w-[50%]">
          <FormattedMessage defaultMessage="Promised Date" id="promised.date"/>
          </h3>
          <p className="font-bold sm:text-xs sm:w-[50%]">{promisedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentGeneralInformation;
