import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.
create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})
const useAxios = () => {
  const {}= useAuth();
  const navigate= useNavigate();
    useEffect(()=>{
       axiosInstance.interceptors.response.use(response =>{
        return response
       }, error=>{
        console.log('error caught in interceptor')
        if(error.status === 401 || error.status === 403){
            console.log('logout the user')

            signOutUser ()
            .then(()=>{
                //move to login page
                navigate('/login')
            })
        }
        return Promise.reject(error)
       })
    },[])
    
    
    return axiosInstance;
};

export default useAxios;