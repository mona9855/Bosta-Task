import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracking from "./pages/Tracking";
import ShipmentDetails from "./pages/ShipmentDetails";
import { IntlProvider } from "react-intl";
import { locales } from "./translations/ar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const language = useSelector(state => state.selectedLanguage.value);

  useEffect(() => {
    const dir = language === "en"? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
    document.documentElement.style.fontFamily = language === "en"? 'Poppins, sans-serif' : 'Cairo, sans-serif';
 }, [language]);

  return (
    <IntlProvider locale={language} defaultLocale='en' messages={locales[language]}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tracking />} />
          <Route path="/shipmentDetails" element={<ShipmentDetails />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
