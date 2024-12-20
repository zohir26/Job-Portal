import {
    createBrowserRouter,
 
  } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../Private/PrivateRoute";

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
    },
    {
      path:"/jobs/:id",
      element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      .then(res=>res.json())
    }
  ]);

  export default router;