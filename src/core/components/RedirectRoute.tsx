import { Navigate } from "react-router-dom";
import {RoutProps} from "../../Interfaces"
const RedirectRoute: React.FC<RoutProps> = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectRoute;
