import TableLayout from "components/Table/TableLayout";
import Payment from "pages/Payment/Payment";
import { cartServices } from "services/CartServices";
import CartButton from "./CartButton";
import { CartData } from "./CONSTANTS";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { default: sagaActions } = require("redux/sagaActions");
const { cartSelector } = require("redux/slices/cart-slice");

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, hasErrors, loading, cartCount } = useSelector(cartSelector);

  const computeSubtotal = (a, b) => {
    console.log(a, b);
    //subTotal.push(a * b);

    return a * b;
  };
  const computeTotal = () => {
    let tot = 0;
    carts.map((item) => {
      tot = computeSubtotal(item.quantity, item.book_id.price) + tot;
    });
    return tot;
  };

  useEffect(() => {
    let action = { page: 0, limit: 5 };
    dispatch({ type: sagaActions.FETCH_CART, action });
  }, []);
  useEffect(() => {}, [loading]);
  return (
    <>
      {carts.length === 0 ? (
        <div>No Cart Items Yet</div>
      ) : (
        <>
          <div>Cart Items</div>
          <div>
            <table className="table">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                <th>Subtotal</th>
              </tr>

              {carts.map((item, index) => (
                <tr>
                  <td>
                    {" "}
                    <img
                      className="imgcs"
                      height={80}
                      width={80}
                      src={
                        "http://localhost:3100/images/" + item.book_id.imgurl
                      }
                    />{" "}
                  </td>
                  <td>{item.book_id.title}</td>
                  <td>{item.book_id.price}</td>
                  <td>
                    <CartButton
                      id={item.id}
                      color="primary"
                      buttonCSS="fa-solid fa-plus"
                      apicall={cartServices.updateIncCartItem}
                    />
                    {"   " + item.quantity + "   "}

                    <CartButton
                      id={item.id}
                      color="primary"
                      buttonCSS="fa-solid fa-minus"
                      apicall={cartServices.updateDecCartItem}
                    />
                    <CartButton
                      id={item.id}
                      color="error"
                      buttonCSS="fa-solid fa-trash"
                      apicall={cartServices.delCartItem}
                    />
                  </td>
                  <td></td>
                  <td>{computeSubtotal(item.quantity, item.book_id.price)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}></td>
                <td>Total:</td>
                <td>{computeTotal()}</td>
              </tr>
              <tr>
                <td colSpan={4}></td>
                <td colSpan={2}>
                  <Payment cartItems={carts} />
                </td>
              </tr>
            </table>
          </div>
          {/* <TableLayout
            cols={CartData.cartColumns}
            data={carts}
            options
            optionData={CartData.cartOptionData}
          /> */}
        </>
      )}
    </>
  );
};

export default Cart;
