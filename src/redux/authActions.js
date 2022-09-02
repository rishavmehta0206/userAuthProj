import axios from "../httpHandler/axios";
import {
  LoginFail,
  LoginPending,
  LoginSuccess,
  RegisterFail,
  RegisterPending,
  RegisterSuccess,
} from "./authSlice";

export const REGISTERUSER = async (dispatch, payload) => {
  console.log(payload);
  dispatch(RegisterPending());
  try {
    const response = await axios.post("/auth/register", payload);
    dispatch(RegisterSuccess(response.data));
  } catch (err) {
    console.log(err.message);
    dispatch(RegisterFail());
  }
};

export const LOGINUSER = async (dispatch, payload) => {
  dispatch(LoginPending());
  try {
    const response = await axios.post("/auth/login", payload);
    dispatch(LoginSuccess(response.data));
  } catch (error) {
    dispatch(LoginFail());
  }
};
