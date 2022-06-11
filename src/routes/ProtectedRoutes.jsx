import MainWrapper from 'pages/Layout/Main/MainWrapper';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate , Outlet} from 'react-router-dom' 

const ProtectedRoute = ({user}) => {
    const user_role = useSelector(state => state.auth.user);
    const role = user_role.role; 
    
    return(

      user_role ? 
      <Navigate to="/login" replace />
      : 
      user.includes(role) ?
        <Outlet />
      :
        <Navigate to="/AccessDenied" replace />
    )
  };

  export default ProtectedRoute;