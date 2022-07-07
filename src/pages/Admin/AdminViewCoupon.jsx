import { Button, Paper } from "@mui/material";
import TableLayout from "components/Table/TableLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import sagaActions from "redux/sagaActions";
import { couponSelector } from "redux/slices/coupon-slice";
import { couponServices } from "services/CouponServices";

const AdminViewCoupon = () => {
  const { promocodes, loading, hasErrors } = useSelector(couponSelector);
  const dispatch = useDispatch();
  const id = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    console.log("id", id.id);
    const response = await couponServices.listAllPromoCodes({
      limit: 3,
      coupon: id.id,
    });
    console.log(response);
    setData(response.data);
  };
  const promoColumns = [
    { field: "id", header: "ID", type: "text" },
    { field: "code", header: "Promo Code", type: "text" },
    {
      field: "times_redeemed",
      header: "Times Redemptions",
      type: "text",
    },
    { field: "max_redemptions", header: "Max Redemptions", type: "text" },
    { field: "active", header: "Active", type: "boolean" },
    { header: "Action" },
  ];

  const promoOptionData = [
    {
      component: (id) => {
        let temp =
          data.length > 0
            ? { active: !data.find((x) => x.id == id).active }
            : {};
        let obj = {
          id: id,
          ...temp,
        };
        console.log(obj);

        return (
          <>
            <Button
              size="large"
              onClick={(e) => {
                console.log("clicked", obj);
                const response = couponServices.updatePromoCode(obj);
                console.log(response);
                toast.promise(response, {
                  error: {
                    render({ data }) {
                      return ` ${data.response.data.message}`;
                    },
                  },
                  success: {
                    render({ data }) {
                      fetchData();
                      return `  ${data.data.message}`;
                    },
                  },
                  pending: `${
                    obj.active ? "ACTIVATING" : "DEACTIVATING"
                  } promocode...`,
                });
              }}
              color="error"
              variant="contained"
            >
              {obj.active ? "ACTIVATE" : "DEACTIVATE"}
            </Button>
          </>
        );
      },
      mode: true,
      color: "error",
    },
  ];
  const AdminPromoData = { promoColumns, promoOptionData };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div>
        <Link to="/admin/coupon"> coupon</Link> {">"}{" "}
        <Link to="">view coupon</Link>
      </div>
      <Paper>
        <Button
          component={Link}
          to={`/admin/addPromo/${id.id}`}
          color="primary"
          variant="contained"
        >
          Add PromoCode
        </Button>
        {data.length > 0 ? (
          <TableLayout
            key="book"
            cols={AdminPromoData.promoColumns}
            data={data}
            options
            optionData={AdminPromoData.promoOptionData}
          />
        ) : (
          <div>No Data</div>
        )}
      </Paper>
    </>
  );
};

export default AdminViewCoupon;
