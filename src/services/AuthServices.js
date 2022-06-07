import { axiosapi } from "./api/createAPI";
import { POST  , SELLER_SIGNUP , USER_SIGNUP , LOGIN } from "./CONSTANTS";
export const login = ( data ) => {
     return axiosapi({
        method : POST,
        url    : LOGIN,
        data   : data,
        headers: { 'Co7ntent-Type': 'application/json' }
    });
};


export const signUp = (obj) => {
    let url = obj.user === 'SELLER' ? SELLER_SIGNUP : USER_SIGNUP ;
    return axiosapi({
        method : POST,
        url    : url,
        data   : obj.data,
        headers: { 'Content-Type': 'application/json' }
    })
}





