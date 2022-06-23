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


export const addBookData = (props) =>{
  let url = "/book/add" ;
  console.log("book",props)
  const data = props.data;
  let formdata = new FormData();
  for(var key in data){
      formdata.append(key,data[key]);
      console.log(formdata , key , data[key]);
  }
  console.log("formData" , ...formdata);
  return axiosapi({
      method : POST,
      url    : url,
      data   : formdata,
      headers: { 'Content-Type': 'multipart/form-data' }
  });
}