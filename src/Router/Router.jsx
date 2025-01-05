import {
  createBrowserRouter,

} from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../Private/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/jobDetails/MyApplications";
import AddJob from "../pages/Home/AddJob";
import MyPostedJobs from "../pages/Home/MyPostedJobs";
import AllJobs from "../AllJob/AllJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }
    ]
  },
  {
    path: "/jobs",
    element: <AllJobs></AllJobs>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: < Register></Register>
  },
  {
    path: "/jobs/:id",
    element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      .then(res => res.json())
  },
  {
    path: "/jobApply/:id",
    element: <PrivateRoute>
      <JobApply></JobApply>
    </PrivateRoute>
  },
  {
    path: '/myApplications',
    element: <PrivateRoute>
      <MyApplications></MyApplications>
    </PrivateRoute>
  },
  {
    path:'/addJob',
    element: <PrivateRoute> 
      <AddJob></AddJob>
    </PrivateRoute>
  },
  {
    path:'/myPostedJobs',
    element:<PrivateRoute>
      <MyPostedJobs></MyPostedJobs> </PrivateRoute>
  }
]);

export default router;