import "./app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";
import Navbar from "./layout/Navbar.jsx";
import Signin from "./pages/Signin.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ErrorPage from "./pages/error-page.jsx";
import UserProfile from "./components/user/UserProfile.jsx";
import UserOrder from "./components/user/UserOrder.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import AdminProfile from "./components/admin/AdminProfile.jsx";
import AdminProducts from "./components/admin/AdminProducts.jsx";
import AdminCatrgorys from "./components/admin/AdminCatrgorys.jsx";
import AdminManager from "./components/admin/AdminManager.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    //! we are using <Navbar /> as parent
    //! so we must use  <Outlet/> from react-router-dom in <Navbar /> component
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      //! dynamic routing for productdetails
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      //!  protected route for user profile
      {
        path: "/dashboard/user",
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "orders",
            element: <UserOrder />,
          },
        ],
      },
      //!  protected route for admin dashboard
      {
        path: "/dashboard/admin",
        element: <AdminRoute />,
        children: [
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "products",
            element: <AdminProducts />,
          },
          {
            path: "category",
            element: <AdminCatrgorys />,
          },
          {
            path: "user",
            element: <AdminManager />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "*",
  //   element: <RouteNotExist />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
