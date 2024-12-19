import Lottie from "lottie-react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import regAni from '../Animation/Register.json'

const Register = () => {
   const handleRegister=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password=form.password.value;
    const newUser= {email, password};
    console.log(newUser)
   }
   
    return (
        <>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen flex justify-center items-center gap-8">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>

   
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[300px]">
        <p>
            <Lottie animationData={regAni}></Lottie>
        </p>
        </div>
      </div>
        <Footer></Footer>
        </>
    );
};

export default Register;