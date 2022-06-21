import FormLayout from "components/Form/Layout/FormLayout";
import TextInputField from "components/Form/Fields/TextInputField";
import { FormControl, Typography } from "@mui/material";
import { SubmitButton } from "components";
import { ADD_BANNER_FORM_VALIDATION } from "utils/validation/formValidation";
import ImageInputField from "components/Form/Fields/ImageInputField";
import { addBannerData } from "services/BannerServices";

const AdminAddBanner = () => {
  const initialState = {
    sequence: 0,
    image: [],
  };
  const validation = ADD_BANNER_FORM_VALIDATION;
  const apicall = addBannerData;
  return (
    <>
      <div className="mt-5">
        <Typography>Add Banner</Typography>
        <FormLayout
          INITITAL_FORM_STATE={initialState}
          FORM_VALIDATION={validation}
          apicall={apicall}
          mode="APICALL"
        >
          <FormControl>
            <TextInputField
              name="sequence"
              label="sequence"
              type="number"
            ></TextInputField>
          </FormControl>
          <FormControl>
            <ImageInputField name="image" type="file"></ImageInputField>
          </FormControl>
          <FormControl>
            <SubmitButton>Add</SubmitButton>
          </FormControl>
        </FormLayout>
      </div>
    </>
  );
};

export default AdminAddBanner;
