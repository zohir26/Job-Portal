import React from 'react';
import { Link } from 'react-router-dom';
import { TiLocationOutline } from "react-icons/ti";
const HotJobsCard = ({ job }) => {
  const { _id,title, location, company, company_logo, requirements } = job;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <figure className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={company_logo}
          alt={`${company} logo`}
        />
      </figure>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-xl">{title}</h2>
          <div className="badge badge-secondary">NEW</div>
        </div>
        <p className="text-gray-700 text-base mb-4">{company} -<TiLocationOutline /> {location}</p>
        <ul className="list-disc list-inside mb-4">
          {requirements.map((req, index) => (
            <li key={index} className="text-gray-600">{req}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
      <div className="px-6 pb-4">
        <Link to= {`/jobs/${_id}`}>
          <button className='btn btn-primary w-full'>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
