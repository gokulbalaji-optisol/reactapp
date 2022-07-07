import { Box, FormControl, Grid, TextField } from "@mui/material";
import { SubmitButton, TextInputField } from "components";
import FormLayout from "components/Form/Layout/FormLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { forgotPassword } from "services/AuthServices";

const EnterEmail = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const initialFormState = {
    email: "",
  };
  const formValidation = "";
  let apicall = async (values) => {
    console.log(values);
    const response = forgotPassword(values);
    toast.promise(response, {
      success: {
        render({ data }) {
          return ` ${data.data.message}`;
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          console.log(data);
          return ` ${data.response.data.message} `;
        },
      },
      pending: "sending otp",
    });
    await response.then((res) => {
      setSuccess(true);
      return res;
    });
  };
  let Item = ({ children }) => {
    return (
      <>
        <Box sx={{ flexDirection: "row" }}>{children}</Box>
      </>
    );
  };
  useEffect(() => {
    if (success) {
      navigate("/enterotp");
    }
  }, [success]);
  return (
    <>
      <Grid container>
        <FormLayout
          INITITAL_FORM_STATE={initialFormState}
          FORM_VALIDATION={formValidation}
          mode="APICALL"
          apicall={apicall}
        >
          <Item>
            <label> EnterEmail : </label>
          </Item>
          <Item>
            <FormControl>
              <TextInputField name="email" label="email" />
            </FormControl>
          </Item>
          <Item>
            <SubmitButton>Reset</SubmitButton>
          </Item>
        </FormLayout>
      </Grid>
    </>
  );
};

export default EnterEmail;
