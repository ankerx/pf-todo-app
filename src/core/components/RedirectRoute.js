import { Navigate } from "react-router-dom";
const RedirectRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectRoute;
