import { axiosapi } from "./api/createAPI";
import { GET  ,POST , FETCH_ALL_GENRE , ADMIN_FETCH_ORDER, ADMIN_FETCH_USER} from "./CONSTANTS";

export const fetchAllOrder = (props) => {
    console.log(props);

    let url = ADMIN_FETCH_ORDER ;
    url = url + (props.limit ? `?page=${props.page}&limit=${props.limit}` : '');
    return axiosapi({
        method : GET,
        url    : url,
        headers: { 'Content-Type': 'application/json' }
    });
}

