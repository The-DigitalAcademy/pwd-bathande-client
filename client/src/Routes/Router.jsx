import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Banner from "../components/banner/Banner";
  import Women from "../Pages/Women";
  import Men from "../Pages/Men";
  import NewArrivals from "../Pages/NewArrivals";
  import Promos from "../Pages/Promos/Promos";
  import Giftcards from "../components/Giftcards/Giftcards"
  import Home from '../App'
  import Error from '../Pages/error/ErrorMsg'
  import ProductNew from '../Data/ProductNew'
  import CategoryProducts from '../components/CategoryProducts/CategoryProducts'
  import CatergoryMen from "../components/CategoryMen/CatergoryMen";
<<<<<<< HEAD
import Login from "../../Login/Login";
import Register from "../../Auth/Register";

=======
  import Register from "../Pages/auth/Register";
  import Login from "../Pages/Login/Login";
  import NeighborhoodLogini from "../Pages/Login/LeighborhoodLogini";
>>>>>>> 01e814efaf7db334109c9f9763d4aaf22a68faf9

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
        path: "/list/:name",
        element: <ProductNew/>,
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
        path: "/giftcard",
        element: <Giftcards/>,
      },

      {
        path: "/login",
        element: <Login/>,
      },

      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "NeighborhoodLogini",
        element: <NeighborhoodLogini/>,
      },

    {
      path: "banner",
      element: <Banner/>,
    },

    {
      path: "/category/:name",
      element: <CategoryProducts />,
    },
    {
      path: "/category_men/:id",
      element: <CatergoryMen />,
    },
  ]);

  export default router;