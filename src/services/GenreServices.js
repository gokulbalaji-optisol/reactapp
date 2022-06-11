import { axiosapi } from "./api/createAPI";
import { GET  , FETCH_ALL_GENRE} from "./CONSTANTS";
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