import FormLayout from "components/Form/Layout/FormLayout";
import TextInputField from "components/Form/Fields/TextInputField";
import { FormControl, Typography } from "@mui/material";
import { Field } from "formik";
import { SubmitButton } from "components";
import { ADD_GENRE_FORM_VALIDATION } from "utils/validation/formValidation";
import ImageInputField from "components/Form/Fields/ImageInputField";
import sagaActions from "redux/sagaActions";
import { addGenreData } from "services/GenreServices";
import SelectInputField from "components/Form/Fields/SelectInputField";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import * as Yup from "yup";
import { useEffect } from "react";
import { addBookData } from "services/BookServices";
const AddBook = () => {
  const dispatch = useDispatch();
  const { genres, loading, hasErrors, genreCount } = useSelector(genreSelector);
  const initialState = {
    title: "",
    desc: "",
    price: "",
    genre: [],
    image: [],
  };

  const FORM_VALIDATION = Yup.object().shape({});

  useEffect(() => {
    dispatch(fetchGenreData(0));
  }, []);

  const apicall = (values) => {
    console.log(values);
  };
  return (
    <div className=" container w-50">
      <div className="mt-5">
        <Typography>Add Genre</Typography>
        <FormLayout
          INITITAL_FORM_STATE={initialState}
          FORM_VALIDATION={FORM_VALIDATION}
          apicall={addBookData}
          mode="APICALL"
        >
          <FormControl fullWidth margin="normal">
            <TextInputField name="title" label="title"></TextInputField>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextInputField name="desc" label="description"></TextInputField>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextInputField name="price" label="price"></TextInputField>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <SelectInputField name="genre" data={genres}></SelectInputField>
          </FormControl>

          <FormControl fullWidth>
            <ImageInputField name="image" type="file"></ImageInputField>
          </FormControl>
          <FormControl fullWidth>
            <SubmitButton>Add</SubmitButton>
          </FormControl>
        </FormLayout>
      </div>
    </div>
  );
};

export default AddBook;
