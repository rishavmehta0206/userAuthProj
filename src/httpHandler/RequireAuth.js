import { useNavigate, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location, "from requireauth");

  console.log({ user });
  return user?.roles?.find((roles) => allowedRoles?.includes(roles)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
