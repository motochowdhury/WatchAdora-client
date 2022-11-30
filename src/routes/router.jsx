import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Blogs from "../pages/blog/Blogs";
import AddProduct from "../pages/dashboard/AddProduct";
import AllSellers from "../pages/dashboard/AllSellers";
import AllUsers from "../pages/dashboard/AllUsers";
import Booking from "../pages/dashboard/Booking";
import MyProduct from "../pages/dashboard/MyProduct";
import MyWishList from "../pages/dashboard/MyWishList";
import Payment from "../pages/dashboard/payment/Payment";
import ReportedProducts from "../pages/dashboard/ReportedProducts";
import WelcomeDashboard from "../pages/dashboard/WelcomeDashboard";
import Home from "../pages/home/Home";
import Products from "../pages/product/Products";
import ErrorPage from "../pages/shared/ErrorPage";
import RequireAdmin from "./RequireAdmin";
import RequireAuth from "./RequireAuth";
import RequireSeller from "./RequireSeller";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products/:catId",
        loader: ({ params }) =>
          axios.get(
            `${process.env.REACT_APP_SERVER_API}/products/${params.catId}`,
            {
              headers: {
                authorization: `bearar ${localStorage.getItem("access-token")}`,
              },
            }
          ),
        element: (
          <RequireAuth>
            <Products />
          </RequireAuth>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "/dashboard",
        element: <WelcomeDashboard />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <RequireAdmin>
            <AllUsers />
          </RequireAdmin>
        ),
      },
      {
        path: "/dashboard/reportedproducts",
        element: (
          <RequireAdmin>
            <ReportedProducts />
          </RequireAdmin>
        ),
      },
      {
        path: "/dashboard/booking",
        element: <Booking />,
      },
      {
        path: "/dashboard/wishlist",
        element: <MyWishList />,
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <RequireSeller>
            <AddProduct />
          </RequireSeller>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <RequireSeller>
            <MyProduct />
          </RequireSeller>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <RequireAdmin>
            <AllSellers />
          </RequireAdmin>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_SERVER_API}/booking/${params?.id}`, {
            headers: {
              authorization: `bearar ${localStorage.getItem("access-token")}`,
            },
          }),
      },
    ],
  },
]);
