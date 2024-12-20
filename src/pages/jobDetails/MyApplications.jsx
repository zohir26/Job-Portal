import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";


const MyApplications = () => {
  const {user}= useAuth();
  const [jobs, setJobs]= useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3000/job-applications/?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        setJobs(data)
    })
  },[user.email])
  
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