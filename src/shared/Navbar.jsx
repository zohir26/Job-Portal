import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Navbar = () => {
  const { user } = useContext(AuthContext)
  // logout
 const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("logout Successful")
      }
      )
      .catch(error => {
        console.log(error)
      })
  }
  const links = <>
    <div className='flex gap-8 text-2xl font-semibold'>
      <Link to='/'> <li>Home</li>  </Link>
      {
        user ? <>
          <Link > <li onClick={handleLogout}>Logout</li>  </Link>
          <Link > <li>{user.email}</li>  </Link>
          <Link to='/addJob'> <li>Add a job</li>  </Link>
          <Link to='/myPostedJobs'> <li>Posted Jobs</li>  </Link>
          <Link to='/myApplications'> <li>My Applications</li>  </Link>
        </> : <>

          <Link to='/login'> <li>Login</li>  </Link>
          <Link to='/register'> <li>Register</li>  </Link>

          
        </>
      }
    </div>
  </>


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Job Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;