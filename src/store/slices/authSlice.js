import { createSlice } from "@reduxjs/toolkit";

const authUser = JSON.parse(localStorage.getItem("authUser"));

const initialState = {
  isAuthenticated: !!authUser?.token,
  user: authUser?.user || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.email;
      localStorage.setItem(
        "authUser",
        JSON.stringify({ user: action.payload.email, token: "123" })
      );
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
