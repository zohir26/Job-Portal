import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
   const {user, loading}= useContext(AuthContext)
   
   if(loading){

   }
   const location = useLocation();

   if(user){
    return children;
   }
  return  <Navigate to= '/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;