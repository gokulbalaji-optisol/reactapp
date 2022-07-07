import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const CartButton = ({ id, color, buttonCSS, apicall }) => {
  const dispatch = useDispatch();
  const handleClick = async (id) => {
    try {
      const response = await apicall(id);
      console.log(response);
      toast.success(response.data);
      dispatch({ type: sagaActions.FETCH_CART });
    } catch (err) {
      toast.error("Error " + err);
      console.log(err);
    }
  };
  useEffect(() => {}, []);
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
        color={color}
        variant="contained"
      >
        <i className={buttonCSS}></i>
        <ToastContainer />
      </Button>
    </>
  );
};

export default CartButton;
