import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracking from "./pages/Tracking";
import ShipmentDetails from "./pages/ShipmentDetails";
import { IntlProvider } from "react-intl";
import { useSnapshot } from "valtio";
import state from "./store";
import { locales } from "./translations/ar";
import { useEffect } from "react";

function App() {
  const snap = useSnapshot(state);

  useEffect(() => {
    const dir = snap.selectedLanguage === "en"? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
    document.documentElement.style.fontFamily = snap.selectedLanguage === "en"? 'Poppins, sans-serif' : 'Cairo, sans-serif';
 }, [snap.selectedLanguage]);

  return (
    <IntlProvider locale={snap.selectedLanguage} defaultLocale='en' messages={locales[snap.selectedLanguage]}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tracking />} />
          <Route path="shipmentDetails" element={<ShipmentDetails />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
