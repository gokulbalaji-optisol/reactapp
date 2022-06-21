import { axiosapi } from "./api/createAPI";
import { POST, FETCH_ALL_BOOK, SELLER_FETCH_BOOK } from "./CONSTANTS";
import { bookObj } from "./fakeData";
export const fetchAllBook = (obj) => {
  let url = obj.url ? SELLER_FETCH_BOOK : FETCH_ALL_BOOK;

  return axiosapi({
    method: POST,
    data: obj.data,
    url: url,
    headers: { "Content-Type": "application/json" },
  });
  //return bookObj();
};
