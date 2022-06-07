import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormLabel, Radio, RadioGroup, Rating, Slider, Typography } from '@mui/material';
import { Field, useFormikContext , useField} from 'formik';

const label = { inputProps: { 'aria-label': 'Checkbox ' } };
const genres = ["Novel" , "Fantasy" , "Horror"]
const CheckBoxField = ({name , ...props}) => {
    const [field , meta , helpers] = useField(name);

    const {submitForm  } = useFormikContext();
    const handleChange = () => {
        submitForm();
    }
    
    return(
        
    <FormGroup >
                <Typography>
                    Genres
                </Typography>
                
                 {/* {genres.map((item , index)=> {
                    return(
                    <Field
                        type = "checkbox"
                        as ={Checkbox}
                        label={item}
                        value= {item}
                        name="genre"
                        // onChange={handleChange}
                        /> )}
                )}    */}
                {genres.map((item,index)=>{
                    return(
                    <FormControlLabel
                        control={ <Checkbox {...label} />}
                        {...field}
                        label = {item}
                        value={item}
                        />    
                    )}
                )}
                {/* <FormControlLabel
                    control={ <Checkbox {...label} />}
                    label ="Horror"
                    value ="Horror"
                    name='genre' 
                />
                <FormControlLabel
                    control={ <Checkbox {...label} />}
                    label ="Fantasy"
                    value ="Fantasy"
                    name='genre'
                /> */}
            </FormGroup>
            
    )
}
export default CheckBoxField;