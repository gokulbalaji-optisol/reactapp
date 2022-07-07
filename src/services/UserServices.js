import { axiosapi } from "./api/createAPI";
import { ADMIN_FETCH_USER, GET } from "./CONSTANTS";

export const fetchAllUser = (data) => {
  console.log(data.action);
  let props = data.action;
  let url = ADMIN_FETCH_USER;
  url = url + (props.limit ? `?page=${props.page}&limit=${props.limit}` : "");
  url = url + (props.srh ? `&srh=${props.srh}` : "");
  console.log("url " + url);
  return axiosapi({
    method: GET,
    url: url,
    headers: { "Content-Type": "application/json" },
  });
};
