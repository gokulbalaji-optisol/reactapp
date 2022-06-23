import { Button } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { bannerSelector } from "redux/slices/banner-slice";
import { AdminBannerData } from "./CONSTANTS";

const AdminBanner = () => {
  const dispatch = useDispatch();
  const { banners, loading, hasErrors } = useSelector(bannerSelector);
  const bannerColumns = AdminBannerData.bannerColumns;
  const optionData = AdminBannerData.bannerOptionData;
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BANNER });
  }, []);
  useEffect(() => {}, [loading]);
  return (
    <>
      <Button
        component={Link}
        to="/admin/addBanner"
        color="primary"
        variant="contained"
      >
        Add Banner
      </Button>
      <TableLayout
        data={banners}
        cols={bannerColumns}
        options
        optionData={optionData}
      ></TableLayout>
    </>
  );
};

export default AdminBanner;
