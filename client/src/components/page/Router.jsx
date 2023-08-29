import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Banner from "../banner/Banner";
  import Women from "../page/Women";
  import Men from "../page/Men";
  import NewArrivals from "../page/NewArrivals";
  import Promos from "../page/Promos";
  import Giftcard from "../Giftcards/Giftcard";
  import Login from "../page/Login"
  import Register from "../page/Register";
 
  const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
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
        path: "promos",
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


  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );