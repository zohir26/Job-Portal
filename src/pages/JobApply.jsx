// import { div } from 'motion/react-client';
// import React, { useState } from 'react';

// const JobApply = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     resume: null
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleFileChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         resume: e.target.files[0]
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log(formData);
    // };

//     return (
//         // <div>
//         //     <h2>Job Application Form</h2>
//         //     <form onSubmit={handleSubmit}>
//         //         <div>
//         //             <label>Name:</label>
//         //             <input
//         //                 type="text"
//         //                 name="name"
//         //                 value={formData.name}
//         //                 onChange={handleChange}
//         //                 required
//         //             />
//         //         </div>
//         //         <div>
//         //             <label>Email:</label>
//         //             <input
//         //                 type="email"
//         //                 name="email"
//         //                 value={formData.email}
//         //                 onChange={handleChange}
//         //                 required
//         //             />
//         //         </div>
//         //         <div>
//         //             <label>Phone:</label>
//         //             <input
//         //                 type="tel"
//         //                 name="phone"
//         //                 value={formData.phone}
//         //                 onChange={handleChange}
//         //                 required
//         //             />
//         //         </div>
//         //         <div>
//         //             <label>Resume:</label>
//         //             <input
//         //                 type="file"
//         //                 name="resume"
//         //                 onChange={handleFileChange}
//         //                 required
//         //             />
//         //         </div>
//         //         <button type="submit">Submit</button>
//         //     </form>
//         // </div>

//         <div>

//         </div>
//     );
// };

// export default JobApply;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const JobApply = () => {
  const id = useParams();
  const {user}= useAuth();
  const navigate = useNavigate()
  const handleJobApply = (event)=>{
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
    const data = {
      linkedIn,
      gitHub,
      resume
    }
    console.log(data);

    const jobsApplication = {
        job_id:id,
        applicant_email : user.email,
        linkedIn,
        gitHub,
        resume
    }
    fetch(`http://localhost:3000/job-applications`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(jobsApplication)
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.insertedId){
        return 'Successfully applied'
       }
    })
    navigate ('/myApplications')
  }
  console.log(id);
    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Apply Now</h1>

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleJobApply}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input type="text" placeholder="linkedin" className="input input-bordered" name='linkedIn'required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="text" placeholder="Github" className="input input-bordered" name='gitHub' required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input type="text" placeholder="Resume" className="input input-bordered" name='resume' required />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default JobApply;