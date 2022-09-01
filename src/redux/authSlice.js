import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: false,
    errorMsg: "",
  },
  reducers: {
    RegisterPending: (state) => {},
    RegisterSuccess: (state, { payload }) => {
      console.log(payload);
    },
    RegisterFail: (state) => {},
    LoginPending: (state) => {
      state.loading = true;
    },
    LoginSuccess: (state, { payload }) => {
      console.log(payload);
      state.user = payload.user;
      state.loading = false;
      state.error = false;
      state.errorMsg = "";
    },
    LoginFail: (state) => {
      state.loading = false;
      state.error = true;
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
} = authSlice.actions;
export default authSlice.reducer;
