import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';
import { Field, useFormikContext , useField} from 'formik';

const label = { inputProps: { 'aria-label': 'Checkbox ' } };
const genres = ["Novel" , "Fantasy" , "Horror"]
const SliderField = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name);
    const {setValue} = helpers;
    const {value} = meta;
    const {submitForm  } = useFormikContext();
    const handleChange = (event , newValue) => {
        setValue(newValue);
        //submitForm();
    }
    
    return(
        
    <FormGroup className="w-100" >
                <Typography>
                    Pricing
                </Typography>
                {/* <FormLabel id='price'>Pricing</FormLabel> */}
                    

                        <Slider
                            // value={sliderValue}
                            // onChange={handleChangeSlider}
                            
                            valueLabelDisplay="auto"
                            {...field}
                            value={value}
                            onChange={handleChange}
                            />        
            </FormGroup>
       
    )
}
export default SliderField;