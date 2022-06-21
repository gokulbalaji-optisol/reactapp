import { FormControl } from "@mui/material";
import { SubmitButton, TextInputField } from "components";
import ImageInputField from "components/Form/Fields/ImageInputField";
import FormLayout from "components/Form/Layout/FormLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import sagaActions from "redux/sagaActions";
import { bannerSelector } from "redux/slices/banner-slice";
import { editBannerData } from "services/BannerServices";
import { ADD_BANNER_FORM_VALIDATION } from "utils/validation/formValidation";

const AdminEditBanner = () => {
  const dispatch = useDispatch();
  const { banner, loading, hasErrors } = useSelector(bannerSelector);
  let params = useParams();
  let action = {
    id: parseInt(params.id),
  };
  useEffect(() => {
    console.log("params", params, action);
    dispatch({ type: sagaActions.FETCH_BANNER_BY_ID, action });
  }, []);
  let initState = {
    id: undefined,
    sequence: undefined,
    img: [],
  };

  const [initialState, setInitialState] = useState(initState);
  useEffect(() => {
    let { id, img, sequence } = { ...banner[0] };
    let data = { id, img, sequence: sequence };
    setInitialState(data);
    console.log(initialState, data);
  }, [banner]);
  return (
    <>
      <div className="mt-5">
        <FormLayout
          INITITAL_FORM_STATE={initialState}
          FORM_VALIDATION={ADD_BANNER_FORM_VALIDATION}
          apicall={editBannerData}
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
            <SubmitButton>Edit</SubmitButton>
          </FormControl>
        </FormLayout>
      </div>
    </>
  );
};

export default AdminEditBanner;
