import { useField} from "formik";
import {  useState } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
const MobileInput = ({errorText}) =>{
    const [validMobile , setValidMobile] = useState()
    const [field, meta, helpers] = useField('mobile');
    const {value} = meta;
    const {setValue} = helpers;
    return(
        <div className="w-100 mb-2">
            <IntlTelInput 
                        id='mobile' 
                        value={value}
                        
                        inputClassName="form-control"
                        onPhoneNumberChange={(isValid,value,countryData ,fullNumber)=>{
                            setValue(fullNumber)
                            setValidMobile(!isValid);
                        }}
                        />
                    {validMobile ? <p className='formerrmsg'>{errorText}</p> : null }    
                
        </div>
    ) 
}
export default MobileInput;