import React from "react";
import { TableFooter, TablePagination, TableRow } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { userSelector } from "redux/slices/user-slice";
import { AdminUserData } from "./CONSTANTS";

const AdminUser = () => {
  const dispatch = useDispatch();
  const { users, loading, hasErrors, usersCount } = useSelector(userSelector);
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
    console.log("initial render");
    let action = { page: page, limit: limit };
    dispatch({ type: sagaActions.ADMIN_FETCH_USER, action });
  }, []);
  useEffect(() => {}, [loading]);
  useEffect(() => {
    let action = { page: page, limit: limit };
    dispatch({ type: sagaActions.ADMIN_FETCH_USER, action });
  }, [page, limit]);
  const userColumns = AdminUserData.userColumns;
  const optionData = AdminUserData.userOptionData;
  return (
    <>
      {users.length > 0 && (
        <TableLayout
          cols={userColumns}
          data={users}
          link="/user/"
          options
          optionData={optionData}
        >
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={3}
                count={usersCount}
                rowsPerPage={limit}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </TableLayout>
      )}
    </>
  );
};

export default AdminUser;
