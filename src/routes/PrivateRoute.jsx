import { useEffect } from "react";
import { Navigate, useNavigate  } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/login" />
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
