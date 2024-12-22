import { useContext, useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import AuthContext from "../Context/AuthContext/AuthContext";
import loginAnimation from '../Animation/Login.json';
import Lottie from "lottie-react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { loggedIn, setLoading, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const userCredential = await loggedIn(email, password);
      const user = userCredential.user;
      const userEmail = { email: user.email };

      const { data } = await axios.post('http://localhost:3000/jwt', userEmail,{withCredentials:true});
      console.log('JWT Token:', data);     
      setLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login failed', error);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };

  return (
    <>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <button type="button" onClick={handleGoogleSignIn} className="btn btn-primary">Login with Google</button>
              </div>
              <div className="form-control mt-6">
                <button type="button" onClick={handleFacebookSignIn} className="btn btn-primary">Login with Facebook</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[300px]">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
