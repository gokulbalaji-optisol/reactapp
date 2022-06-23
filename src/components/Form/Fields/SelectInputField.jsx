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

const SelectInputField = ({ name, data, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const genres = data;
  const { value } = meta;
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
          <InputLabel id="genre-select-label">Genre</InputLabel>
          <Select
            labelId="genre-select-label"
            id="genre-select"
            value={value}
            label="Genre"
            onChange={handleChange}
          >
            {genres.map((item, index) => {
              return <MenuItem value={item.genre}>{item.genre}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </FormGroup>
    </>
  );
};
export default SelectInputField;
