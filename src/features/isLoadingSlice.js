import { createSlice } from "@reduxjs/toolkit";
 
export const isLoadingSlice = createSlice({
    name: "isLoading",
    initialState: {
        value: true
    },
    reducers: {
        setIsLoading: (state, action) => {
            
            state.value = action.payload
            
            
        }
    }
   });

   export const { setIsLoading } = isLoadingSlice.actions;
   export default isLoadingSlice.reducer;