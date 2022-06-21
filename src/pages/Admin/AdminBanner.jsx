import { Button } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { bannerSelector } from "redux/slices/banner-slice";
import { bannerColumns } from "./CONSTANTS";

const AdminBanner = () => {
  const dispatch = useDispatch();
  const { banners, loading, hasErrors } = useSelector(bannerSelector);
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BANNER });
  }, []);
  useEffect(() => {}, [loading]);
  return (
    <>
      <Button
        component={Link}
        to="/admin/addBook"
        color="primary"
        variant="contained"
      >
        Add Banner
      </Button>
      <TableLayout
        data={banners}
        cols={bannerColumns}
        link="/admin/banner/"
      ></TableLayout>
    </>
  );
};

export default AdminBanner;
