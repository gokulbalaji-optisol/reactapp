import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { cartSelector } from "redux/slices/cart-slice";
import { cartServices } from "services/CartServices";
import { useEffect } from "react";

const CartButton = ({ id, mode, color, buttonCSS }) => {
  let apicall;
  let comp = () => {};
  const dispatch = useDispatch();
  const handleClick = async (id) => {
    await apicall(id)
      .then((resp) => {
        console.log(resp);
        dispatch({ type: sagaActions.FETCH_CART });
      })
      .catch((err) => console.log(err));
  };
  const build = (mode) => {
    switch (mode) {
      case "AddToCart":
        apicall = cartServices.addCartItem;

        break;
      case "IncQuan":
        apicall = cartServices.updateIncCartItem;
        break;
      case "DecQuan":
        apicall = cartServices.updateDecCartItem;
        break;
      case "DelCartItem":
        apicall = cartServices.delCartItem;
        break;
      default:
        apicall = cartServices.addCartItem;
        break;
    }
  };
  useEffect(() => {
    console.log("render");
    build(mode);
    console.log(apicall);
  }, []);
  useEffect(() => {
    console.log("change render");
  }, [apicall]);
  return (
    <>
      <Button
        size="large"
        onClick={(e) => {
          handleClick(id);
        }}
        color={i.color}
        variant="contained"
      >
        <i className={i.buttonCSS}></i>
      </Button>
    </>
  );
};

export default CartButton;
