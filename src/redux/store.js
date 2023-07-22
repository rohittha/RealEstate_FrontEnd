import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import propReducer from "./features/properties/propertiesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    props: propReducer,
  },
});
