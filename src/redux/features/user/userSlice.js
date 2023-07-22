import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  userEmail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      //const token = state.userToken;
      localStorage.removeItem("token");
      window.location.reload();
    },
    loginUser: (state, { payload }) => {
      console.log("loginUser action", payload);
      const { token } = payload;
      localStorage.setItem("token", token);
      //state.userEmail = email;
    },
  },
});

export const { logoutUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
