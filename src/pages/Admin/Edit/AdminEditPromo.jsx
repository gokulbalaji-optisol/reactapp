import { FormControl, FormControlLabel, Grid } from "@mui/material";
import { SubmitButton, TextInputField } from "components";
import SelectField from "components/Form/Fields/SelectField";
import SelectInputField from "components/Form/Fields/SelectInputField";
import FormLayout from "components/Form/Layout/FormLayout";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { couponSelector } from "redux/slices/coupon-slice";
import { couponServices } from "services/CouponServices";
import * as Yup from "yup";

const AdminEditPromo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { promocode, loading, hasErrors } = useSelector(couponSelector);
  const INITITAL_FORM_STATE = {
    promocode: "",
    max_redemptions: null,
    active: "",
  };
  const FORM_VALIDATION = Yup.object().shape({
    promocode: Yup.string().uppercase().required().strict(),
    max_redemptions: Yup.number().nullable(),
  });
  const apicall = (values) => {
    console.log(values);
    let data = {
      id: params.id,
      active: values.data.active,
    };
    couponServices.updatePromoCode(data);
    fetchData();
  };
  const [initState, setInitState] = useState(INITITAL_FORM_STATE);
  let data = {
    heading: "Active",
    data: ["true", "false"],
  };
  const fetchData = () => {
    let action = {
      promocode: params.id,
    };
    dispatch({ type: sagaActions.FETCH_PROMOCODE_BY_ID, action });
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    let data = {
      promocode: promocode.code,
      max_redemptions: promocode.max_redemptions,
      active: promocode.active,
    };

    setInitState(data);
  }, [promocode]);
  return (
    <>
      <div>
        <Link to="/admin/coupon"> coupon</Link> {">"}{" "}
        <Link to={`/admin/coupon/view/${params.id}`}>view coupon</Link> {">"}{" "}
        <Link to="">Edit coupon</Link>
      </div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          Edit Promo code
        </Grid>
        <Grid item xs={3}>
          <FormLayout
            INITITAL_FORM_STATE={initState}
            FORM_VALIDATION={FORM_VALIDATION}
            apicall={apicall}
            mode="APICALL"
          >
            <TextInputField
              name="promocode"
              label="promocode"
              fullWidth
              margin="normal"
            />
            <TextInputField
              name="max_redemptions"
              label="Max Redemption"
              type="number"
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <SelectField
                name="active"
                label="active"
                data={data.data}
                heading="Active"
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <SubmitButton>Update PromoCode</SubmitButton>
            </FormControl>
          </FormLayout>
        </Grid>
      </Grid>
    </>
  );
};
export default AdminEditPromo;
