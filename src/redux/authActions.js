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
  dispatch(RegisterPending());
  try {
    const response = await axios.post("/register", JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch(RegisterSuccess(response.data));
  } catch (err) {
    console.log(err.message);
    dispatch(RegisterFail());
  }
};

export const LOGINUSER = async (dispatch, payload) => {
  dispatch(LoginPending());
  try {
    const response = await axios.post("/auth", payload, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch(LoginSuccess(response.data));
  } catch (error) {
    dispatch(LoginFail());
  }
};