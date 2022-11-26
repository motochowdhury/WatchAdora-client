import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/home/Home";
import Products from "../pages/product/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "",
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
            `${process.env.REACT_APP_SERVER_API}/products/${params.catId}`
          ),
        element: <Products />,
      },
    ],
  },
]);
