import { axiosapi } from "./api/createAPI";
import { ADMIN_FETCH_USER, GET } from "./CONSTANTS";

export const fetchAllUser = (props) => {
    console.log(props);

    let url = ADMIN_FETCH_USER ;
    url = url + (props.limit ? `?page=${props.page}&limit=${props.limit}` : '');
    return axiosapi({
        method : GET,
        url    : url,
        headers: { 'Content-Type': 'application/json' }
    });
}