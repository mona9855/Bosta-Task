import { createSlice } from "@reduxjs/toolkit";
 
export const selectedLanguageSlice = createSlice({
    name: "selectedLanguage",
    initialState: {
        value: 'en'
    },
    reducers: {
        setSelectedLanguage: (state, action) => {
            state.value = action.payload
        }
    }
   });

   export const { setSelectedLanguage } = selectedLanguageSlice.actions;
   export default selectedLanguageSlice.reducer;