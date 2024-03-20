import React from "react";
import state from "../store";
import { FormattedMessage } from "react-intl";

const LanguageSelector = () => {

  const handleLanguageChange = (e) => {
    state.selectedLanguage = e.target.value;
  };

  return (
    <div>
      <select
        name="languages"
        className="px-4 py-2 xxs:text-xs rounded"
        defaultValue="en"
        onChange={handleLanguageChange}
      >
        <option value="en">
          <FormattedMessage id="tracking.english" defaultMessage="English" />
        </option>
        <option value="ar">
          <FormattedMessage id="tracking.arabic" defaultMessage="Arabic" />
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;
