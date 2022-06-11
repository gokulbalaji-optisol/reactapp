import { axiosapi } from "./api/createAPI";
import { POST  , FETCH_ALL_BOOK} from "./CONSTANTS";
import { bookObj } from "./fakeData";
export const fetchAllBook = (data) => { 
    let url = FETCH_ALL_BOOK 
    console.log("url",data)
    return axiosapi({
        method : POST,
        data   : data,
        url    : url,
        headers: { 'Content-Type': 'application/json' }
    });
    //return bookObj();
};