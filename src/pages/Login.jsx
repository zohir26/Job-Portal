import { useContext, useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import AuthContext from "../Context/AuthContext/AuthContext";
import loginAnimation from '../Animation/Login.json'
import Lottie from "lottie-react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
 const {user, loggedIn , loading, setLoading,signInWithGoogle,signInWithFacebook}=useContext(AuthContext)
 const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const from =  location.state?.from?.pathname || '/';
 const handleLogin= async(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginUser={email,password}
// auth redirect
try{
await  loggedIn (email,password);
setLoading(false)
 navigate(from, {replace:true});
}catch (error){
  console.error('login failed',error)
  setLoading(false)
}

    loggedIn(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      setLoading(false)
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }  
  
  const handleGoogleSignIn= ()=>{
    signInWithGoogle()
  }
  const handleFacebookSignIn=()=>{
    signInWithFacebook()
  }
  return (
      <>
      <Navbar></Navbar>
             <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="email" className="input input-bordered" name="email"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">               
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="form-control mt-6">               
                <button onClick={handleGoogleSignIn} className="btn btn-primary">Login with google</button>
              </div>
              
              <div className="form-control mt-6">               
                <button onClick={handleFacebookSignIn} className="btn btn-primary">Login with facebook</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[300px]">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
      </div>
      <Footer></Footer>
      </>

    );
};

export default Login;