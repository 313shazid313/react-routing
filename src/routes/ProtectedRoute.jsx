import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const ProtectedRoute = () => {
  //! we can get isSignIn data from redux or props by fetching data from backend
  //! so this line is dummy data // const isSignIn = true;

  const isSignIn = true;
  // if isLogin is true then go <Outlet /> else <Signin />
  return <>{isSignIn ? <Outlet /> : <Signin />}</>;
};

export default ProtectedRoute;
