import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import useAuth from "../../Hooks/useAuth";
import { TiLocationOutline } from "react-icons/ti";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {
  const [jobs, setJobs]= useState([])
  const {user}= useAuth();
  
  useEffect(()=>{
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        setJobs(data)
    })
  },[user.email])
    return (
        <>
        <Navbar></Navbar>
        <h2>This is my posted jobs: {jobs.length}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
   
            {
                jobs.map(job=>    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <figure className="w-full h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={job.company_logo}
                        alt={`${job.company} logo`}
                      />
                    </figure>
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="font-bold text-xl">{job.title}</h2>
                        <div className="badge badge-secondary">NEW</div>
                      </div>
                      <p className="text-gray-700 text-base mb-4">{job.company} -<TiLocationOutline /> {job.location}</p>
                      <ul className="list-disc list-inside mb-4">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600">{req}</li>
                        ))}
                      </ul>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                    <div className="px-6 pb-4">
                      <Link to={`/jobs/${job._id}`}>
                        <button className='btn btn-primary w-full'>
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>)
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default MyPostedJobs;