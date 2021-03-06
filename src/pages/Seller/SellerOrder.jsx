import { Button, TableFooter, TablePagination, TableRow } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { orderSelector } from "redux/slices/order-slice";
import { orderColumns } from "./CONSTANTS";

const SellerOrder = () => {
  const dispatch = useDispatch();
  const { orders, loading, hasErrors, orderCount } = useSelector(orderSelector);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const handleChangePage = (event, newPage) => {
    console.log(event, newPage);
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value, parseInt(event.target.value, 10));
    setLimit(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let action = { page: page, limit: limit };
    dispatch({ type: sagaActions.SELLER_FETCH_ORDER, action });
  }, []);
  useEffect(() => {}, [loading]);
  useEffect(() => {
    let action = { page: page, limit: limit };
    dispatch({ type: sagaActions.SELLER_FETCH_ORDER, action });
  }, [page, limit]);
  return (
    <>
      <TableLayout cols={orderColumns} data={orders} link="/order/">
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              colSpan={3}
              count={orderCount}
              rowsPerPage={limit}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </TableLayout>
    </>
  );
};

export default SellerOrder;
