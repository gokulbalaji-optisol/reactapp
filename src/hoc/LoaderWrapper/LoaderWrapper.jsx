import { useState } from "react";

export const LoaderWrapper = (WrappedComponent , loadingMessage , LoaderComponent) => {
    function HOC(props){
        const[loading , setLoading] = useState(true);
        const setLoadingState = state =>{
            setLoading(state);
        }
        
        return(
            <>
            { loading && <div>
                <LoaderComponent />
            </div> 
            }
            {<WrappedComponent {...props} setLoading={setLoadingState}/>
            }
            </>
        )
    }
    return HOC;
}
export default LoaderWrapper;