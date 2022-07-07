import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { Field, useFormikContext, useField } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreData, genreSelector } from "redux/slices/genre-slice";
import { useEffect } from "react";

const SelectField = ({ name, data, heading, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const genres = data;
  const { value } = meta;
  console.log(value);

  const { setValue } = helpers;
  const { submitForm } = useFormikContext();
  const handleChange = (event) => {
    setValue(event.target.value);
    submitForm();
  };

  return (
    <>
      <FormGroup>
        <FormControl fullWidth>
          <InputLabel id="genre-select-label">{heading}</InputLabel>
          <Select
            labelId="genre-select-label"
            id="genre-select"
            value={value}
            label="Genre"
            onChange={handleChange}
          >
            {genres.map((item, index) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </FormGroup>
    </>
  );
};
export default SelectField;
