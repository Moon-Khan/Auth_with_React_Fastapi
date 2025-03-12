import { JSX, useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element}) => {
  const auth = useContext(authContext);
  return auth?.token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
