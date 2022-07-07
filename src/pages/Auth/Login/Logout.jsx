import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import sagaActions from "redux/sagaActions";
const Logout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
      dispatch({ type: sagaActions.AUTH_LOGOUT });
    }
  };
  return (
    <>
      {logout()}

      <Navigate to="/login" replace />
    </>
  );
};

export default Logout;
