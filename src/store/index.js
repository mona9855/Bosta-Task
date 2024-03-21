

import { configureStore } from "@reduxjs/toolkit";
import selectedLanguageReducer from "../features/selectedLanguageSlice";
import trackingNumberReducer from '../features/trackingNumberSlice';
import dataReducer from '../features/dataSlice';

 
export const store = configureStore({
  reducer: {
    selectedLanguage: selectedLanguageReducer,
    trackingNumber: trackingNumberReducer,
    data: dataReducer,
  },
});

