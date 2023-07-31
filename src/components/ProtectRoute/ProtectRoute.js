import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";

function ProtectRoute(props) {
  const userId = Cookie.get("user_id");
  if (userId === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
}

export default ProtectRoute;
