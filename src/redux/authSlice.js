import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: false,
    errorMsg: "",
  },
  reducers: {
    RegisterPending: (state) => {},
    RegisterSuccess: (state, { payload }) => {},
    RegisterFail: (state) => {},
    LoginPending: (state) => {
      state.loading = true;
    },
    LoginSuccess: (state, { payload }) => {
      state.user = payload
      localStorage.setItem("user", JSON.stringify(payload));
      state.loading = false;
      state.error = false;
      state.errorMsg = "";
    },
    LoginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    Logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const {
  RegisterPending,
  RegisterSuccess,
  RegisterFail,
  LoginPending,
  LoginFail,
  LoginSuccess,
  Logout,
} = authSlice.actions;
export default authSlice.reducer;
