import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import LoaderWrapper from "hoc/LoaderWrapper/LoaderWrapper";
import GenreLoader from "components/Loaders/GenreLoader";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import { orderSelector } from "redux/slices/order-slice";
import sagaActions from "redux/sagaActions";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, hasErrors, orderCount } = useSelector(orderSelector);
  const limit = 9;

  const fetchOrderList = async (page) => {
    let action = { page, limit: 9 };
    dispatch({ type: sagaActions.FETCH_ORDER, action });
  };

  const handlePageClick = async (select) => {
    fetchOrderList(select.selected);
  };

  useEffect(() => {
    console.log("render via initial");
    fetchOrderList(0);
  }, []);

  useEffect(() => {
    console.log("render via loading");
  }, [loading]);
  if (orders.length > 0) {
    return (
      <>
        <div>Order Items</div>
        <div>
          <table className="table">
            {orders.map((item, index) => (
              <>
                <div className="container">
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                    <th>Subtotal</th>
                  </tr>
                  {item.order_details_id.map((i) => (
                    <>
                      <tr>
                        <td>
                          {" "}
                          <img
                            className="imgcs"
                            height={140}
                            src={
                              "http://localhost:3110/images/" + i.book_id.imgurl
                            }
                          />{" "}
                        </td>
                        <td>{i.book_id.title}</td>
                        <td>{i.book_id.price}</td>
                        <td>{i.quantity}</td>

                        <td></td>
                        <td>{i.quantity * i.book_id.price}</td>
                      </tr>
                    </>
                  ))}

                  <tr colSpan={6}>
                    <b>address: </b>
                    {item.addr_id.line1},{item.addr_id.line2},
                    {item.addr_id.state} -{item.addr_id.postal_code},
                    {item.addr_id.city} , {item.addr_id.country}
                  </tr>
                  <tr></tr>
                  <tr colSpan={6}>
                    <b>Delivery Mobile: </b>
                    {item.delivery_number}
                  </tr>
                  <tr>
                    <td colSpan={4}></td>
                    <td>Total:</td>
                    <td>{item.total}</td>
                  </tr>
                </div>
              </>
            ))}
          </table>
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(orderCount / 9)}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination ml-5 justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </>
    );
  } else {
    return <div> No Orders yet</div>;
  }
};

// export default LoaderWrapper(Genre , "We're Fetching Data" , GenreLoader);
export default Orders;
