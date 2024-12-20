import { useContext } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import AuthContext from "../Context/AuthContext/AuthContext";
import loginAnimation from '../Animation/Login.json'
import Lottie from "lottie-react";

const Login = () => {
 const {user, loggedIn , loading, setLoading,signInWithGoogle}=useContext(AuthContext)
  const handleLogin=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginUser={email,password}

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
                <input type="email" placeholder="email" className="input input-bordered" name="email"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
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