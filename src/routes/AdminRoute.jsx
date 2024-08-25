import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const AdminRoute = () => {
  //! we can get isSignIn and isAdmin data from redux or props by fetching data from backend
  //! so this line is dummy data // const isSignIn = true;

  const isSignIn = true;
  const isAdmin = true;
  return <>{isSignIn && isAdmin ? <Outlet /> : <Signin />}</>;
};

export default AdminRoute;
