import TableLayout from "components/Table/TableLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sagaActions from "redux/sagaActions";
import { bannerSelector } from "redux/slices/banner-slice";
import { bannerColumns } from "./CONSTANTS";

const AdminBanner = () => {

    const dispatch = useDispatch();
    const {banners , loading , hasErrors } = useSelector(bannerSelector);
    useEffect(()=>{
        
        dispatch({type: sagaActions.FETCH_BANNER})    
    },[])
    useEffect(()=>{

    },[loading])
    return ( 
        <>
            <TableLayout data={banners} cols={bannerColumns} ></TableLayout>
        </>
    );
}
 
export default AdminBanner;