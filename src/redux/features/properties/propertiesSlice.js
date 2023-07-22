import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchfields: {
    city: "Waterloo",
    bedrooms: 1,
    baths: 1,
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
      console.log("spreadFields", spreadFields);
      state.searchfields = spreadFields;
    },
  },
});

console.log("propertiesSlice", propertiesSlice);
export const { searchProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
