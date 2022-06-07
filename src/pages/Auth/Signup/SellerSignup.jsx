import { FormControl } from '@mui/material';

// import  SubmitButton  from 'components/Layouts/Form/Fields/SubmitButton';

import { USER_SIGNUP , SELLER_SIGNUP , LOGIN} from 'services/CONSTANTS';
import FormLayout from 'components/Form/Layout/FormLayout';
import  {TextInputField , PasswordInputField , SubmitButton , MobileInput}  from 'components'
import SignupFooter from '../../../components/Form/Fields/SignupFooter';
import { USER_SIGNUP_HELPER_TEXT, 
         USER_SIGNUP_LINK_NAME ,
         USER_SIGNUP_LOGIN_HELPER_TEXT,
         USER_SIGNUP_LOGIN_LINK_NAME,
         USER_SIGNUP_SUBMIT_BUTTON_TEXT,
         SIGNUP_DISPLAY
        } from '../CONSTANTS';
import { SELLER_SIGNUP_INITIAL_FORM_STATE } from 'utils/initialFormState/auth';
import { SELLER_SIGNUP_FORM_VALIDATION } from 'utils/validation/formValidation';
import {signUp} from 'services/AuthServices' 

const INITITAL_FORM_STATE = SELLER_SIGNUP_INITIAL_FORM_STATE;
const FORM_VALIDATION = SELLER_SIGNUP_FORM_VALIDATION;

const SellerSignUp_Data = {
    user:'SELLER'
}

const SellerSignUp = () => {

    return( 
        <div className=' container w-50'>

            <FormLayout
            key="seller"
            INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
            FORM_VALIDATION = {FORM_VALIDATION}
            data={SellerSignUp_Data}
            apicall={signUp}    
            >
                <FormControl
                    margin='normal'
                    >
                    <div className='display-4'>
                        {SIGNUP_DISPLAY}
                    </div>
                </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='username'
                            label='username'
                            
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='email'
                            label='email'
                            margin='normal'
                        />
                    </FormControl>
 
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='company'
                            label='company'
                            margin='normal'
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        size='normal'
                        >
                        <MobileInput errorText='Please enter a valid mobile number'/>   
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <PasswordInputField  
                            name='password'
                            label='password'
                            
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <SubmitButton>
                            {USER_SIGNUP_SUBMIT_BUTTON_TEXT}
                        </SubmitButton> 
                    </FormControl>
                
            </FormLayout>
            
        
            <SignupFooter
                LinkUrl = {LOGIN}
                LinkHelperText = {USER_SIGNUP_LOGIN_HELPER_TEXT}
                LinkName = {USER_SIGNUP_LOGIN_LINK_NAME}
            />
            <SignupFooter
                LinkUrl = {USER_SIGNUP}
                LinkHelperText = {USER_SIGNUP_HELPER_TEXT}
                LinkName = {USER_SIGNUP_LINK_NAME}
            />
            
        </div>
    )
}
export default SellerSignUp;