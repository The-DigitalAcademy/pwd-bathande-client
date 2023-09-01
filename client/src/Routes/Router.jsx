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
  import Login from "../Pages/Login"
  import Register from "../Pages/Register";
  import Home from '../App'
  import Error from '../Pages/error/ErrorMsg'
  import ProductNew from '../Data/ProductNew'
  import Category from "../components/Category/Category";
  import About from "../Pages/About";
  import Contact from "../Pages/Contact";
  import Delivery from "../Pages/Delivery";
  import Term from "../Pages/Term";
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

    {
      path: "category/:id",
      element: <Category/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/delivery",
      element: <Delivery/>
    },
    {
      path: "/term",
      element: <Term/>
    },

  ]);

  export default router;