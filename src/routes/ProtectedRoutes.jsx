import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  const user_role = useSelector((state) => state.auth.user);
  const role = user_role.user.role;
  console.log(user_role, user_role.user.role);

  return user_role ? (
    user.includes(role) ? (
      <Outlet />
    ) : (
      <Navigate to="/AccessDenied" replace />
    )
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
