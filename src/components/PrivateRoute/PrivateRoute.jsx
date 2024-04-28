import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[500px] space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-[#0DBC95]"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/SignIn"></Navigate>;
};

export default PrivateRoute;
