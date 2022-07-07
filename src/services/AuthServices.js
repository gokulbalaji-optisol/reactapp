import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosapi } from "./api/createAPI";
import { POST, SELLER_SIGNUP, USER_SIGNUP, LOGIN } from "./CONSTANTS";
export const login = async (data) => {
  console.log("login apicall", data);
  const response = axiosapi({
    method: POST,
    url: LOGIN,
    data: data.data,
    headers: { "Content-Type": "application/json" },
  });
  toast.promise(response, {
    success: "successfuly loggedin",
    error: "Username/password is wrong",
    pending: "logging in...",
  });
  let datas = await response;
  console.log("from login service", datas);
  console.log("data resp", JSON.parse(atob(datas.data.token.split(".")[1])));
  localStorage.setItem("token", datas.data.token);

  return response;
};

export const signUp = (obj) => {
  let url = obj.user === "SELLER" ? SELLER_SIGNUP : USER_SIGNUP;
  return axiosapi({
    method: POST,
    url: url,
    data: obj.data,
    headers: { "Content-Type": "application/json" },
  });
};

export const forgotPassword = (obj) => {
  let url = "/forgotpassword";
  return axiosapi({
    method: POST,
    url: url,
    data: obj.data,
    headers: { "Content-Type": "application/json" },
  });
};

export const resetPassword = (obj) => {
  let url = "/resetpassword";
  return axiosapi({
    method: POST,
    url: url,
    data: obj.data,
    headers: { "Content-Type": "application/json" },
  });
};

export const authServices = { resetPassword };
