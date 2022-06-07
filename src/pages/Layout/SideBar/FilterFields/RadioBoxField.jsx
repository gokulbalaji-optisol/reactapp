import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';
import { Field, useFormikContext , useField} from 'formik';

const RadioBoxField = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name);

    const {submitForm  } = useFormikContext();
    const handleChange = (e) => {
        console.log(e.target.value)
        //submitForm();
    }
    
    return(
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Rating</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        {...field}
                        
                        >
                        <FormControlLabel value={1} control={<Radio />} label="1🌟" />
                        <FormControlLabel value={2} control={<Radio />} label="2🌟" />
                        <FormControlLabel value={3} control={<Radio />} label="3🌟" />
                        <FormControlLabel value={4} control={<Radio />} label="4🌟" />
                        <FormControlLabel value={5} control={<Radio />} label="5🌟" />
                        
                </RadioGroup>
            </FormControl>            
                 
    )
}
export default RadioBoxField;
