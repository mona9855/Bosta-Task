import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { ConfigProvider, Steps } from "antd";

const ShipmentStepper = () => {
  const snap = useSnapshot(state);
  const shipmentStatus = snap.data.CurrentStatus.state;
  let activeStep = "";
  let stepperColor = "";
  const language = snap.selectedLanguage;


  let subTitle;
  if(language === 'en') {
    subTitle =
     shipmentStatus === "CANCELLED"
      ? "the customer is not in the address."
      : "Shipper cancelled the order.";

  } else {
    subTitle =
     shipmentStatus === "CANCELLED"
      ? "العميل غير متواجد في العنوان"
      : "تم إلغاء الشحنة من التاجر";
  }
      
  const steps = language === 'en'? 
  (
    [
      {
        step: 1,
        title: "Picked Up",
      },
      {
        step: 2,
        title: "Processing",
      },
      {
        step: 3,
        title: "Out for Delivery",
        subTitle: subTitle,
      },
      {
        step: 4,
        title: "Delivered",
      },
    ]
  )
:
(
  [
    {
      step: 1,
      title: "تم إنشاء الشحنة",
    },
    {
      step: 2,
      title: "تم إستلام الشحنة من التاجر",
    },
    {
      step: 3,
      title: "الشحنة خرجت للتسليم",
      subTitle: subTitle,
    },
    {
      step: 4,
      title: "تم التسليم",
    },
  ]
)


  if (shipmentStatus === "DELIVERED") {
    activeStep = steps.length;
  } else {
    activeStep = steps.length - 1;
  }

  if (shipmentStatus === "DELIVERED") {
    stepperColor = "#5eeb34";
  } else if (shipmentStatus === "CANCELLED") {
    stepperColor = "#a3720f";
  } else {
    stepperColor = "#a30f0f";
  }

  return (
    <div className={`px-4`}>
      <div className="border-2 border-gray-300 rounded-br-xl rounded-bl-xl p-4">
        <ConfigProvider
          theme={{
            components: {
              Steps: {
                colorPrimary: stepperColor,
                fontFamily: language === 'en'? 'poppins' : 'cairo'
              },
              
            },
          }}
        >
          <Steps
            current={activeStep}
            responsive
            items={steps}
            labelPlacement="vertical"
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ShipmentStepper;
