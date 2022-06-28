import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { cartSelector } from "redux/slices/cart-slice";
import { cartServices } from "services/CartServices";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartButtonAddToCart = ({ id }) => {
  const dispatch = useDispatch();
  const addToCart = async (id) => {
    await cartServices
      .addCartItem(id)
      .then((resp) => {
        console.log(resp);
        dispatch({ type: sagaActions.FETCH_CART });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <IconButton
        aria-label="addtocart"
        onClick={(e) => {
          addToCart(id);
        }}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </>
  );
};

export default CartButtonAddToCart;
