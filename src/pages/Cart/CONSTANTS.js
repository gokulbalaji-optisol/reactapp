import { Link } from "react-router-dom";
import { cartServices } from "services/CartServices";

export const cartColumns = [
  { field: "id", header: "ID", type: "text" },
  { field: "book_id.title", header: "Title", type: "text" },
  { field: "book_id.price", header: "Price", type: "text" },
  { field: "quantity", header: "Quantity", type: "text" },
  { field: "book_id.imgurl", header: "Image", type: "image", prefix: true },
  { header: "Action" },
];

export const cartOptionData = [
  {
    api: cartServices.updateIncCartItem.then((resp) => {
      console.log(resp);
    }),
    buttonCSS: "fa-solid fa-plus",
    color: "primary",
    apicall: true,
  },
  {
    api: cartServices.updateDecCartItem,
    buttonCSS: "fa-solid fa-minus",
    color: "primary",
    apicall: true,
  },
  {
    api: cartServices.delCartItem,
    buttonCSS: "fa-solid fa-trash",
    color: "error",
    apicall: true,
  },
];
export const CartData = { cartColumns, cartOptionData };
