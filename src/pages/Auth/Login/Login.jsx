import { FormControl } from '@mui/material';

// import  SubmitButton  from 'components/Layouts/Form/Fields/SubmitButton';

import { USER_SIGNUP , SELLER_SIGNUP , LOGIN} from 'services/CONSTANTS';
import FormLayout from 'components/Form/Layout/FormLayout';
import  {TextInputField , PasswordInputField , SubmitButton , SignupFooter}  from 'components/Form';

import { USER_SIGNUP_SUBMIT_BUTTON_TEXT,
         LOGIN_DISPLAY,
         LOGIN_HELPER_TEXT,
         SIGNUP_DISPLAY
        } from '../CONSTANTS';
import { LOGIN_INITIAL_FORM_STATE } from 'utils/initialFormState/auth';
import { LOGIN_FORM_VALIDATION } from 'utils/validation/formValidation';
import {login} from 'services/AuthServices';
import sagaActions from 'redux/sagaActions';

const INITITAL_FORM_STATE = LOGIN_INITIAL_FORM_STATE;
const FORM_VALIDATION = LOGIN_FORM_VALIDATION;

const apicall = {
    type: sagaActions.AUTH_LOGIN,
}

const Login = () => {

    return( 
        <div className=' container w-50'>

            <FormLayout

            INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
            FORM_VALIDATION = {FORM_VALIDATION}
            apicall={apicall} 
            mode="DISPATCH"   
            >
                <FormControl
                    margin='normal'
                    >
                    <div className='display-4'>
                        {LOGIN_DISPLAY}
                    </div>
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
                        <PasswordInputField  
                            name='password'
                            label='password'
                            type='password'
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <SubmitButton
                        key="login"
                        >
                            {LOGIN_DISPLAY}
                        </SubmitButton> 
                    </FormControl>
                
            </FormLayout>
            
        
            <SignupFooter
                LinkUrl = {USER_SIGNUP}
                LinkHelperText = {LOGIN_HELPER_TEXT}
                LinkName = {SIGNUP_DISPLAY}
            />
            
            
        </div>
    )
}
export default Login;