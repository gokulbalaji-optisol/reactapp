import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';
import { Field, useFormikContext , useField} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenreData, genreSelector } from 'redux/slices/genre-slice';
import { useEffect } from 'react';

const CheckBoxField = ({name , data , ...props}) => {
    const [field , meta , helpers] = useField(name);
    const genres = data
    const {submitForm  } = useFormikContext();
    const handleChange = () => {
        submitForm();
    }

    return(
        
    <FormGroup >
                <Typography>
                    Genres
                </Typography>
                {genres.map((item,index)=>{
                    return(
                    <FormControlLabel
                        control={ <Checkbox  />}
                        {...field}
                        label = {item.genre}
                        value={item.genre}
                        />    
                    )}
                )}
                
            </FormGroup>
            
    )
}
export default CheckBoxField;