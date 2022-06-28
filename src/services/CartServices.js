import { axiosapi } from "./api/createAPI";
import {
  GET,
  POST,
  FETCH_ALL_CART,
  ADD_CART_ITEM,
  INC_CART_ITEM,
  DEC_CART_ITEM,
  DELETE_CART_ITEM,
} from "./CONSTANTS";

export const fetchAllCart = (props) => {
  let url = FETCH_ALL_CART;
  url = url + (props.limit ? `?page=${props.page}&limit=${props.limit}` : "");
  return axiosapi({
    method: GET,
    url: url,
    headers: { "Content-Type": "application/json" },
  });
};
export const addCartItem = (props) => {
  console.log(props);
  const data = props.data;
  let url = ADD_CART_ITEM + `/${data.id}`;
  return axiosapi({
    method: POST,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const updateIncCartItem = (id) => {
  console.log(id);
  let url = INC_CART_ITEM + `/${id}`;
  return axiosapi({
    method: GET,
    url: url,
    headers: { "Content-Type": "application/json" },
  });
};

export const updateDecCartItem = (props) => {
  console.log(props);
  const data = props.data;
  let url = DEC_CART_ITEM + `/${data.id}`;
  return axiosapi({
    method: GET,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const delCartItem = (props) => {
  console.log(props);
  const data = props.data;
  let url = DELETE_CART_ITEM + `/${data.id}`;
  return axiosapi({
    method: GET,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json" },
  });
};

export const cartServices = {
  fetchAllCart,
  addCartItem,
  updateIncCartItem,
  updateDecCartItem,
  delCartItem,
};
