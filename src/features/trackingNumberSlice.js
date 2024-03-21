import { createSlice } from "@reduxjs/toolkit";

export const trackingNumberSlice = createSlice({
    name: "trackingNumber",
    initialState: {
        value: ''
    },
    reducers: {
        setTrackingNumber: (state, action) => {
            state.value = action.payload;
          },
    }
   });

   export const { setTrackingNumber } = trackingNumberSlice.actions
   export default trackingNumberSlice.reducer;