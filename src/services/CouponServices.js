import { toast } from "react-toastify";
import { axiosapi } from "./api/createAPI";
import { GET, POST, SELLER_SIGNUP, USER_SIGNUP, LOGIN } from "./CONSTANTS";

export const listAllCoupons = async (data) => {
  const response = axiosapi({
    method: GET,
    url: `/admin/listAllCoupon?limit=${data.limit}`,

    headers: { "Content-Type": "application/json" },
  });
  //   toast.promise(response, {
  //     success: "successfuly loggedin",
  //     error: "Username/password is wrong",
  //     pending: "logging in...",
  //   });
  let datas = await response;
  console.log(datas);
  return datas;
};

export const listAllPromoCodes = (obj) => {
  let url = `/admin/listAllPromoCode?limit=${obj.limit}&coupon=${obj.coupon}`;
  return axiosapi({
    method: GET,
    url: url,
    headers: { "Content-Type": "application/json" },
  });
};

export const getPromoCodeByCouponId = (obj) => {
  console.log(obj);
  let url = `/admin/getPromoCodeByCouponId?promocode=${obj.coupon}`;
  return axiosapi({
    method: GET,
    url: url,
    headers: { "Content-Type": "application/json" },
  });
};

export const createCoupon = (obj) => {
  let url = "/admin/createCoupon";
  let data = obj.data;
  return axiosapi({
    method: POST,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteCoupon = (obj) => {
  let url = "/admin/deleteCoupon";
  console.log(obj);
  let data = { coupon: obj };
  return axiosapi({
    method: POST,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const createPromoCode = (data) => {
  let url = "/admin/createPromoCode";
  return axiosapi({
    method: POST,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const updatePromoCode = (data) => {
  let url = "/admin/updatePromoCode";
  return axiosapi({
    method: POST,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const couponServices = {
  listAllCoupons,
  listAllPromoCodes,
  createCoupon,
  createPromoCode,
  deleteCoupon,
  getPromoCodeByCouponId,
  updatePromoCode,
};
