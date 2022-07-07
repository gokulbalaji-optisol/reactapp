import { FormControl } from "@mui/material";

// import  SubmitButton  from 'components/Layouts/Form/Fields/SubmitButton';

import { USER_SIGNUP, SELLER_SIGNUP, LOGIN } from "services/CONSTANTS";
import FormLayout from "components/Form/Layout/FormLayout";
import {
  TextInputField,
  PasswordInputField,
  SubmitButton,
  SignupFooter,
} from "components/Form";

import {
  USER_SIGNUP_SUBMIT_BUTTON_TEXT,
  LOGIN_DISPLAY,
  LOGIN_HELPER_TEXT,
  SIGNUP_DISPLAY,
} from "../CONSTANTS";
import { LOGIN_INITIAL_FORM_STATE } from "utils/initialFormState/auth";
import { LOGIN_FORM_VALIDATION } from "utils/validation/formValidation";
import { login } from "services/AuthServices";
import sagaActions from "redux/sagaActions";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EnterEmail from "../ForgotPassword/EnterEmail";

const INITITAL_FORM_STATE = LOGIN_INITIAL_FORM_STATE;
const FORM_VALIDATION = LOGIN_FORM_VALIDATION;

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apicall = (DataObj) => {
    dispatch({ type: sagaActions.AUTH_LOGIN, DataObj });
  };
  useEffect(() => {
    if (isLoggedIn) {
      console.log("change", user.user.role);
      if (user.user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (user.user.role === "SELLER") {
        navigate("/seller/dashboard");
      } else {
        navigate("/book");
      }
    }
  }, [isLoggedIn]);
  return (
    <div className=" container w-50">
      <FormLayout
        INITITAL_FORM_STATE={INITITAL_FORM_STATE}
        FORM_VALIDATION={FORM_VALIDATION}
        apicall={apicall}
        mode="APICALL"
      >
        <FormControl margin="normal">
          <div className="display-4">{LOGIN_DISPLAY}</div>
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <TextInputField name="email" label="email" margin="normal" />
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <PasswordInputField
            name="password"
            label="password"
            type="password"
          />
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <SubmitButton key="login">{LOGIN_DISPLAY}</SubmitButton>
        </FormControl>
      </FormLayout>
      <Link to="/forgotpassword" className="">
        forgot password ?
      </Link>
      <SignupFooter
        LinkUrl={USER_SIGNUP}
        LinkHelperText={LOGIN_HELPER_TEXT}
        LinkName={SIGNUP_DISPLAY}
      />
    </div>
  );
};
export default Login;
