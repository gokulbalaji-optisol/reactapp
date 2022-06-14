import { axiosapi } from "./api/createAPI";
import { GET  ,POST , FETCH_ALL_BANNER , ADD_BANNER} from "./CONSTANTS";
export const fetchAllBanner = (  ) => { 
    let url = FETCH_ALL_BANNER ;
    return axiosapi({
        method : GET,
        url    : url,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const addBannerData = (props) =>{
    let url = ADD_BANNER ;
    console.log(props)
    const data = props.data;
    let formData = new FormData();
    formData.append('sequence',data.sequence);
    formData.append('image',data.image)
    return axiosapi({
        method : POST,
        url    : url,
        data   : formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}