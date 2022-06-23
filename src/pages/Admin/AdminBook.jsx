import {
  Box,
  Button,
  IconButton,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { bookSelector, fetchBookData } from "redux/slices/book-slice";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import { AdminBookData } from "./CONSTANTS";

const AdminBook = () => {
  const dispatch = useDispatch();
  const { books, loading, hasErrors, booksCount } = useSelector(bookSelector);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const bookColumns = AdminBookData.bookColumns;
  const optionData = AdminBookData.bookOptionData;
  const handleChangePage = (event, newPage) => {
    console.log(event, newPage);
    setPage(newPage);
    // let action = {page:newPage , limit:limit  }
    // dispatch({type: sagaActions.FETCH_BOOK , action})
  };
  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value, parseInt(event.target.value, 10));
    setLimit(event.target.value);
    setPage(0);
    // dispatch
  };

  useEffect(() => {
    let action = { page: page, limit: limit };
    dispatch({ type: sagaActions.FETCH_BOOK, action });
  }, []);
  useEffect(() => {}, [loading]);
  useEffect(() => {
    let action = { page: page, limit: limit };
    dispatch({ type: sagaActions.FETCH_BOOK, action });
  }, [page, limit]);
  return (
    <>
      <Button
        component={Link}
        to="/admin/addBook"
        color="primary"
        variant="contained"
      >
        Add Book
      </Button>
      <TableLayout
        key="book"
        cols={bookColumns}
        data={books}
        options
        optionData={optionData}
      >
        <TableFooter>
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
      </TableLayout>
    </>
  );
};

export default AdminBook;
