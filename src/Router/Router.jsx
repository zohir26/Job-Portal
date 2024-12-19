import {
    createBrowserRouter,
 
  } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <h2>Route Not Found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        }
      ]
    },
    {
        path:"/login",
        element: <Login></Login>
    },
    {
        path:"/register",
        element:< Register></Register>
    }
  ]);

  export default router;