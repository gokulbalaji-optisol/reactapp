import { SubmitButton, TextInputField } from "components";
import FormLayout from "components/Form/Layout/FormLayout";
import * as Yup from "yup";
const AdminAddCoupon = () => {
  const initialState = {
    coupon: "",
  };
  const formValidation = Yup.object().shape({
    coupon: Yup.string().required().uppercase(),
  });
  const apicall = (values) => {
    console.log(values);
  };
  return (
    <>
      <FormLayout
        INITITAL_FORM_STATE={initialState}
        FORM_VALIDATION={formValidation}
        mode="APICALL"
        apicall={apicall}
      >
        <TextInputField name="coupon" label="coupon" />
        <SubmitButton>Generate</SubmitButton>
      </FormLayout>
    </>
  );
};
export default AdminAddCoupon;
