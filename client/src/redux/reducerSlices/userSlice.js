import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userDetails: {},
  isLoggedIn: false,
  token: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return {
        ...state,
        token: actions.payload.token,
        isLoggedIn: actions.payload.success,
        userDetails: actions.payload.userDetails,
      };
    },
    updateUserDetails: (state, actions) => {
      return {
        ...state,
        userDetails: actions.payload.userDetails,
      };
    },
  },
});

export const { setUserDetails, updateUserDetails, handleLogout } =
  UserSlice.actions;
export default UserSlice.reducer;