import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Shop from "../pages/Shop/Shop";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/shop',
            element: <Shop/>,
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element:<Register/>
        }
      ]
    },
  ]);