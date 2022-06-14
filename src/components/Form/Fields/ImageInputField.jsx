import { Field } from "formik";
const ImageInputField = ({name,type}) =>{
    
    return(
        <div className="w-100 mb-2">
            <Field >
            {
                ({form }) => {
                const {setFieldValue} = form;
                return(
                    <input
                        id={name}
                        type="file"
                        name={name}
                        onChange={
                            (e) => { setFieldValue(name , e.target.files[0]) }
                        }
                    />
                    )
                }
            }
              
            </Field>
        </div>
    ) 
}
export default ImageInputField;