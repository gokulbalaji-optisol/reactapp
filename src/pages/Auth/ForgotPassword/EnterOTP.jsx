import { FormControl } from "@mui/material";
import { PasswordInputField, SubmitButton, TextInputField } from "components";
import FormLayout from "components/Form/Layout/FormLayout";
import { toast } from "react-toastify";
import { authServices } from "services/AuthServices";
import * as Yup from "yup";
const EnterOTP = () => {
  const initialFormState = {
    otp: null,
    password: "",
    confirmpassword: "",
  };
  const formValidation = Yup.object().shape({
    otp: Yup.number("Enter 6 digt OTP number")
      .min(100000, "Please Enter a valid 6 digit OTP number")
      .max(999999, "Please Enter a valid 6 digit OTP number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Please Enter atleast 8 characters")
      .required("Required"),
    confirmpassword: Yup.string()
      .min(8, "Please Enter atleast 8 characters")
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  let apicall = (values) => {
    console.log(values);
    const response = authServices.resetPassword(values);
    toast.promise(response, {
      success: {
        render({ data }) {
          return ` ${data.data.message}`;
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          return ` ${data.response.data.message} `;
        },
      },
      pending: "resetting",
    });
  };
  return (
    <>
      <div className=" container w-50">
        <div> EnterOTP : </div>
        <FormLayout
          INITITAL_FORM_STATE={initialFormState}
          FORM_VALIDATION={formValidation}
          mode="APICALL"
          apicall={apicall}
        >
          <FormControl fullWidth={true} margin="normal">
            <TextInputField name="otp" label="OTP" type="number" />
          </FormControl>
          <FormControl fullWidth={true} margin="normal">
            <PasswordInputField
              name="password"
              label="password"
              type="password"
            />
          </FormControl>
          <FormControl fullWidth={true} margin="normal">
            <PasswordInputField
              name="confirmpassword"
              label="confirm password"
              type="password"
            />
          </FormControl>
          <SubmitButton>Reset password</SubmitButton>
        </FormLayout>
      </div>
    </>
  );
};

export default EnterOTP;
