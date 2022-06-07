import {Grid } from '@mui/material' 
import { Formik , Form} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormLayout = ({INITITAL_FORM_STATE , FORM_VALIDATION  , apicall , children , ...rest}) =>{
    return(
        <Grid container >
            <Formik
                initialValues={{
                    ...INITITAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={async(values) => {
                    console.log(' from form main ',values);
                    const {data : dataConfig} = {...rest };
                    const errHandler = (res) =>{
                        console.log("errr",res)
                        switch(res.status){
                            case 400 :
                                return ("Bad Request");
                                
                            case 404 :
                                return ("Not Found");
                                
                            case null :
                                return ("Unknown Error")
                                
                            default:
                                return ("No Server Response")
                        }
                    } 

                    //experimental
                    let data = new FormData();
                    for ( var key in values ) {
                        data.append(key, values[key]);
                    }
                    const DataObj = {
                        ...rest ? dataConfig : {},
                        data:data
                    }
                    try {
                        const response = apicall(DataObj);
                        toast.promise(response , {
                            pending:"saving",
                            error: errHandler(response),
                            success:"Saved Successfully"
                        })
                    } catch (err) {
                        console.log(err);
                        if (!err.response) {
                            toast.info('No Server Response',{
                                position: toast.POSITION.TOP_CENTER
                              });
                        } else if (err.response.status === 409) {
                            toast.info('Username Taken');
                        } else {
                            toast.danger('Registration Failed')
                        }
                    }
                }}
                >
                <Form >
                    <Grid container >
                        {children}
                    </Grid>
                </Form>
            </Formik>
            <ToastContainer />
        </Grid>
    )
}
export default FormLayout;