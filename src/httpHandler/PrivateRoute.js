import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  let user = JSON.parse(localStorage.getItem("user"));
  let roles = user?.roles;
  console.log(user)

  console.log(roles);
  return user ? roles?.find((role)=>{return allowedRoles.includes(role)}) ? <Outlet /> : <Navigate to='/unauthorized'/> : <Navigate to="/login" />;
};

export default PrivateRoute;
