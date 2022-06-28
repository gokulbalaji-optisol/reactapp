import { Link } from "react-router-dom";
import { cartServices } from "services/CartServices";
import CartButton from "./CartButton";

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
    //buttonCSS: "fa-solid fa-plus",
    color: "primary",
    component: (id) => (
      <CartButton
        mode="IncQuan"
        id={id}
        color="primary"
        buttonCSS="fa-solid fa-plus"
      />
    ),
    mode: true,
  },
  {
    //buttonCSS: "fa-solid fa-minus",
    color: "primary",
    component: (id) => <CartButton mode="DecQuan" />,
  },
  {
    //buttonCSS: "fa-solid fa-trash",

    color: "error",
    component: (id) => <CartButton mode="DelCartItem" />,
  },
];
export const CartData = { cartColumns, cartOptionData };
