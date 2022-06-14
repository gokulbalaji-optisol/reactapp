import { axiosapi } from "./api/createAPI";
import { GET  ,POST , FETCH_ALL_GENRE} from "./CONSTANTS";
export const fetchAllGenre = ( props ) => {
    console.log(props) 

    let url = FETCH_ALL_GENRE ;
    url = url + (props.limit ? `?page=${props.page}&limit=${props.limit}` : '');
    return axiosapi({
        method : GET,
        url    : url,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const addGenreData = (props) =>{
    let url = "/genre/add" ;
    console.log(props)
    const data = props.data;
    const formdata = new FormData();
    for(var key in data){
        formdata.append(key,data[key])
    }
    return axiosapi({
        method : POST,
        url    : url,
        data   : formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}