import axios from "axios";
import { Navigate } from "react-router-dom";
import store from "redux/store";
let instance = axios.create({
  baseURL: "http://localhost:3100",
});

instance.interceptors.request.use(function (config) {
  // const token = localStorage.getItem('token');
  const {
    auth: {
      user: { token },
    },
  } = store.getState();

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  console.log("axios", config);
  return config;
});

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       console.log("err 401");
//       return <Navigate to="/AccessDenied" replace />;
//     }
//     return error;
//   }
// );

export default instance;
