import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shop/Shop";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/shop',
            element: <Shop/>
        },
      ]
    },
  ]);