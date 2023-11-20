import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchfields: {
    city: "Kitchener",
    bedrooms: 2,
    baths: 2,
    province: "Ontario",
  },
};

const propertiesSlice = createSlice({
  name: "props",
  initialState,
  reducers: {
    searchProperties: (state, { payload }) => {
      const fields = state.searchfields;
      const spreadFields = { ...fields, ...payload };
      //console.log("spreadFields", spreadFields);
      state.searchfields = spreadFields;
    },
  },
});

console.log("propertiesSlice", propertiesSlice);
export const { searchProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
