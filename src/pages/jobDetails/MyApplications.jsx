import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import useAxios from "../../Hooks/useAxios";


const MyApplications = () => {
  const {user}= useAuth();
  const [jobs, setJobs]= useState([]);
  // use the axios hook
  const axiosSecure = useAxios( );
  // useEffect(()=>{
    // if(user && user.email){
    //   fetch(`http://localhost:3000/jobs?applicant_email=${user.email}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //       setJobs(data)
    //   })
    // }

  //   axios.get(`http://localhost:3000/jobs?applicant_email=${user.email}`, {withCredentials:true})
  //   .then(res=>setJobs(res.data))
  // },[user.email])

  // No need to use baseurl and withCredentials as they are declared in hook

  axiosSecure.get(`/jobs?applicant_email=${user.email}`)
  .then(res=>setJobs(res.data))
    return (
      <>
      <Navbar>  </Navbar>
      <div className='min-h-screen'>
            <h2>my applications: {jobs.length}</h2>

            {
                jobs.map(job=><div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>{job.applicant_email}</td>
                          <td>{job.gitHub}</td>
                          <td>{job.resume}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>)
            }
        </div>
      <Footer></Footer>
      </>
    );
};

export default MyApplications;