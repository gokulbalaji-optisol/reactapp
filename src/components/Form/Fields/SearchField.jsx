import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import sagaActions from "redux/sagaActions";

const SearchField = ({ label, type }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
    let action = { page: 0, limit: 5, srh: e.target.value };
    dispatch({ type: type, action });
  };
  return (
    <>
      <TextField
        label={label}
        onChange={handleChange}
        margin="normal"
      ></TextField>
    </>
  );
};
export default SearchField;
