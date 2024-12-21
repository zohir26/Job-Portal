import React from 'react';
import { TiLocationOutline } from 'react-icons/ti';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';

const JobDetails = () => {
    const jobs= useLoaderData()
   const { _id } = jobs;
    return (
    <>
    <Navbar></Navbar>

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white min-h-screen">
        <figure className="w-full h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={jobs.company_logo}
            alt={`${jobs.company} logo`}
          />
        </figure>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-xl">{jobs.title}</h2>
            <div className="badge badge-secondary">NEW</div>
          </div>
          <p className="text-gray-700 text-base mb-4">{jobs.company} -<TiLocationOutline /> {jobs.location}</p>
          <ul className="list-disc list-inside mb-4">
            {jobs.requirements.map((req, index) => (
              <li key={index} className="text-gray-600">{req}</li>
            ))}
          </ul>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        <div className="px-6 pb-4">
          <Link to= {`/jobApply/${_id}`}>
            <button className='btn btn-primary w-full'>
              Apply Now
            </button>
          </Link>
        </div>
      </div>
     <Footer></Footer>  
    </>
    );
};

export default JobDetails;