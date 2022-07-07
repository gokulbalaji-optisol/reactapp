import { Box, Grid, Paper } from "@mui/material";
import { SubmitButton, TextInputField } from "components";
import FormLayout from "components/Form/Layout/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { couponServices } from "services/CouponServices";
import * as Yup from "yup";

const AdminAddPromo = () => {
  const navigate = useNavigate();
  let id = useParams();
  const initialState = {
    promocode: "",
  };
  const formValidation = Yup.object().shape({
    promocode: Yup.string().required().uppercase(),
  });
  const apicall = async (values) => {
    console.log(values);
    let data = { promocode: values.data.promocode, coupon: id.id };
    let response = couponServices.createPromoCode(data);
    toast.promise(response, {
      error: {
        render({ data }) {
          return ` ${data.response.data.message}`;
        },
      },
      success: {
        render({ data }) {
          navigate(-1);
          return `  ${data.data.message}`;
        },
      },
      pending: "creating promocode...",
    });
  };
  return (
    <div className="container ">
      <Box
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginLeft: "35%", marginTop: "10%" }}
      >
        <FormLayout
          INITITAL_FORM_STATE={initialState}
          FORM_VALIDATION={formValidation}
          mode="APICALL"
          apicall={apicall}
        >
          <label>Enter Promo Code:</label>
          <TextInputField
            name="promocode"
            label="Promo Code"
            fullWidth={true}
          />
          <SubmitButton>Generate</SubmitButton>
        </FormLayout>
      </Box>
    </div>
  );
};
export default AdminAddPromo;
