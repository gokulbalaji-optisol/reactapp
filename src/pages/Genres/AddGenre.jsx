import FormLayout from "components/Form/Layout/FormLayout";
import TextInputField from "components/Form/Fields/TextInputField";
import { FormControl, Typography } from "@mui/material";
import { Field } from "formik";
import { SubmitButton } from "components";
import { ADD_GENRE_FORM_VALIDATION } from "utils/validation/formValidation";
import ImageInputField from "components/Form/Fields/ImageInputField";
import sagaActions from "redux/sagaActions";
import { addGenreData } from "services/GenreServices";

const AddGenre = () => {
const initialState = {
    genre:'',
    image:[],
}
const validation = ADD_GENRE_FORM_VALIDATION;
const apicall=addGenreData;
    return      (
          <>
            <div className="mt-5">
                <Typography>
                    Add Genre
                </Typography>
                <FormLayout 
                INITITAL_FORM_STATE={initialState}
                FORM_VALIDATION={validation}
                apicall={apicall}
                mode="APICALL"   
                >
                    <FormControl>
                        <TextInputField name="genre" label="genre"></TextInputField>
                    </FormControl>
                    {/* <FormControl>
                        <Field
                        type="file"
                        name="image"
                        ></Field>
                    </FormControl> */}
                    <FormControl>
                        <ImageInputField
                        name="image"
                        type="file"
                        ></ImageInputField>
                    </FormControl>
                    <FormControl>
                        <SubmitButton>Add</SubmitButton>
                    </FormControl>
                </FormLayout>
            </div>
        </>
     );
}
 
export default AddGenre;