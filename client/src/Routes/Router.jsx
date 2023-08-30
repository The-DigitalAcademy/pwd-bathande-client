import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Banner from "../components/banner/Banner";
  import Women from "../Pages/Women";
  import Men from "../Pages/Men";
  import NewArrivals from "../Pages/NewArrivals";
  import Promos from "../Pages/Promos/Promos";
  import Giftcard from "../components/Giftcards/Giftcard";
  import Login from "../Pages/Login"
  import Register from "../Pages/Register";
  import Home from '../App'
  import Error from '../Pages/error/ErrorMsg'
 
  const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
        errorElement: <Error />
      },

      {
        path: "newarrivals",
        element: <NewArrivals/>,
      },

      {
        path: "women",
        element: <Women/>,
      },
      {
        path: "men",
        element: <Men/>,
      },

      {
        path: "/promos",
        element: <Promos/>,
      },

      {
        path: "gift card",
        element: <Giftcard/>,
      },

      {
        path: "login",
        element: <Login/>,
      },

      {
        path: "register",
        element: <Register/>,
      },
    {
      path: "banner",
      element: <Banner/>,
    },
  ]);

  export default router;