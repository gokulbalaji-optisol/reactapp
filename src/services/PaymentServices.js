import { axiosapi } from "./api/createAPI";
import { POST, PAYMENT_URL } from "./CONSTANTS";

export const payment = (data) => {
  let url = PAYMENT_URL;
  return axiosapi({
    method: POST,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const paymentServices = {
  payment,
};
