

import { configureStore } from "@reduxjs/toolkit";
import selectedLanguageReducer from "../features/selectedLanguageSlice";
import trackingNumberReducer from '../features/trackingNumberSlice';
import dataReducer from '../features/dataSlice';
import isLoadingReducer from '../features/isLoadingSlice';
import errorReducer from '../features/errorSlice';

 
export const store = configureStore({
  reducer: {
    selectedLanguage: selectedLanguageReducer,
    trackingNumber: trackingNumberReducer,
    data: dataReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
  },
});

