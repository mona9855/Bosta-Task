import React from "react";
import { FormattedMessage } from "react-intl";
import {  useSelector, useDispatch } from 'react-redux';
import {setSelectedLanguage} from "../features/selectedLanguageSlice";


const LanguageSelector = () => {
  const language = useSelector(state => state.selectedLanguage.value);
  const dispatch = useDispatch() 
  const handleLanguageChange = (e) => {
    dispatch(setSelectedLanguage(e.target.value));
  };


  return (
    <div>
      <select
        name="languages"
        className="px-4 py-2 xxs:text-xs rounded"
        defaultValue={language}
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
