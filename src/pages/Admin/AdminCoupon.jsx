import { Button, TableFooter, TablePagination, TableRow } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import sagaActions from "redux/sagaActions";
import { couponSelector } from "redux/slices/coupon-slice";
import { couponServices } from "services/CouponServices";
import AdminAddCoupon from "./Add/AdminAddCoupon";

const AdminCoupon = () => {
  const dispatch = useDispatch();
  const { coupons, hasErrors, loading } = useSelector(couponSelector);
  const couponColumns = [
    { field: "id", header: "ID", type: "text" },
    { field: "percent_off", header: "Percent_Off", type: "text" },
    { field: "currency", header: "Currency", type: "text" },
    { header: "Action" },
  ];

  const couponOptionData = [
    {
      link: "/admin/coupon/view/",
      buttonCSS: "fa-solid fa-pen",
      color: "primary",
    },
    {
      component: (id) => {
        return (
          <>
            <Button
              size="large"
              onClick={(e) => {
                console.log(id);
                const response = couponServices.deleteCoupon(id);
                toast.promise(response, {
                  error: {
                    render({ data }) {
                      return ` ${data.response.data.message}`;
                    },
                  },
                  success: {
                    render({ data }) {
                      return `  ${data.data.message}`;
                    },
                  },
                  pending: "deleting coupon...",
                });
              }}
              color="error"
              variant="contained"
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </>
        );
      },
      // link: "/admin/coupon/delete/",
      // buttonCSS: "fa-solid fa-trash",
      color: "error",
      mode: true,
    },
  ];
  const AdminCouponData = { couponColumns, couponOptionData };
  const fetchData = async () => {
    let action = {
      limit: 3,
    };
    dispatch({ type: sagaActions.FETCH_COUPON, action });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {}, [coupons]);
  return (
    <>
      <div>
        <div>
          <Link to=""> coupon</Link> {">"}
        </div>
        <Button
          component={Link}
          to="/admin/addCoupon"
          color="primary"
          variant="contained"
        >
          Add Coupon
        </Button>
      </div>

      {coupons.length > 0 ? (
        <TableLayout
          key="book"
          cols={AdminCouponData.couponColumns}
          data={coupons}
          options
          optionData={AdminCouponData.couponOptionData}
        />
      ) : (
        <div>No Data</div>
      )}
      {/* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              colSpan={7}
              count={booksCount}
              rowsPerPage={limit}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      */}
    </>
  );
};
export default AdminCoupon;
