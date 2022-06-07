import * as Yup from 'yup';


export const USER_SIGNUP_FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    password: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    
})

export const SELLER_SIGNUP_FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),

    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    company: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    password: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    
})

export const LOGIN_FORM_VALIDATION = Yup.object().shape({
    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    password: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    
})
