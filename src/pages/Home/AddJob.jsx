// import React, { useState } from 'react';

// const AddJob = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     location: '',
//     jobType: '',
//     category: '',
//     applicationDeadline: '',
//     salaryMin: '',
//     salaryMax: '',
//     currency: 'bdt',
//     description: '',
//     company: '',
//     requirements: '',
//     responsibilities: '',
//     status: 'active',
//     hr_email: '',
//     hr_name: '',
//     company_logo: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData= new FormData();
//     const initialData= Object.fromEntries(formData.entries());
//     const {salaryMin, salaryMax, currency, ...newJob}= initialData;

//     newJob.salaryRange = {salaryMin, salaryMax,currency}
//     console.log(newJob, initialData)
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="card w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Add a Job</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Job Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               placeholder="Enter job title"
//               className="input input-bordered w-full"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               placeholder="Enter location"
//               className="input input-bordered w-full"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="jobType" className="block text-gray-700 font-medium mb-2">Job Type</label>
//             <input
//               type="text"
//               id="jobType"
//               name="jobType"
//               placeholder="Enter job type"
//               className="input input-bordered w-full"
//               value={formData.jobType}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               placeholder="Enter category"
//               className="input input-bordered w-full"
//               value={formData.category}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="applicationDeadline" className="block text-gray-700 font-medium mb-2">Application Deadline</label>
//             <input
//               type="date"
//               id="applicationDeadline"
//               name="applicationDeadline"
//               className="input input-bordered w-full"
//               value={formData.applicationDeadline}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4 grid grid-cols-3 gap-4">
//             <div>
//               <label htmlFor="salaryMin" className="block text-gray-700 font-medium mb-2">Salary Min</label>
//               <input
//                 type="number"
//                 id="salaryMin"
//                 name="salaryMin"
//                 placeholder="Min"
//                 className="input input-bordered w-full"
//                 value={formData.salaryMin}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="salaryMax" className="block text-gray-700 font-medium mb-2">Salary Max</label>
//               <input
//                 type="number"
//                 id="salaryMax"
//                 name="salaryMax"
//                 placeholder="Max"
//                 className="input input-bordered w-full"
//                 value={formData.salaryMax}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="currency" className="block text-gray-700 font-medium mb-2">Currency</label>
//               <select
//                 id="currency"
//                 name="currency"
//                 className="input input-bordered w-full"
//                 value={formData.currency}
//                 onChange={handleChange}
//               >
//                 <option value="bdt">BDT</option>
//                 <option value="usd">USD</option>
//               </select>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               placeholder="Enter job description"
//               className="textarea textarea-bordered w-full"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               placeholder="Enter company name"
//               className="input input-bordered w-full"
//               value={formData.company}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="requirements" className="block text-gray-700 font-medium mb-2">Requirements</label>
//             <input
//               type="text"
//               id="requirements"
//               name="requirements"
//               placeholder="Enter job requirements (comma-separated)"
//               className="input input-bordered w-full"
//               value={formData.requirements}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="responsibilities" className="block text-gray-700 font-medium mb-2">Responsibilities</label>
//             <input
//               type="text"
//               id="responsibilities"
//               name="responsibilities"
//               placeholder="Enter job responsibilities (comma-separated)"
//               className="input input-bordered w-full"
//               value={formData.responsibilities}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status</label>
//             <input
//               type="text"
//               id="status"
//               name="status"
//               placeholder="Enter status"
//               className="input input-bordered w-full"
//               value={formData.status}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="hr_email" className="block text-gray-700 font-medium mb-2">HR Email</label>
//             <input
//               type="email"
//               id="hr_email"
//               name="hr_email"
//               placeholder="Enter HR email"
//               className="input input-bordered w-full"
//               value={formData.hr_email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="hr_name" className="block text-gray-700 font-medium mb-2">HR Name</label>
//             <input
//               type="text"
//               id="hr_name"
//               name="hr_name"
//               placeholder="Enter HR name"
//               className="input input-bordered w-full"
//               value={formData.hr_name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="company_logo" className="block text-gray-700 font-medium mb-2">Company Logo URL</label>
//             <input
//               type="url"
//               id="company_logo"
//               name="company_logo"
//               placeholder="Enter company logo URL"
//               className="input input-bordered w-full"
//               value={formData.company_logo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button type="submit" className="btn btn-primary">Add Job</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddJob;
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
   const navigate= useNavigate()
    const {user}= useAuth()
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        jobType: '',
        category: '',
        applicationDeadline: '',
        salaryMin: '',
        salaryMax: '',
        currency: 'bdt',
        description: '',
        company: '',
        requirements: '',
        responsibilities: '',
        status: 'active',
        hr_email: user?.email || '',
        hr_name: user?.displayName || '',
        company_logo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Adjust the form data for requirements and responsibilities to be arrays
        const processedData = {
            ...formData,
            salaryRange: {
                min: parseInt(formData.salaryMin),
                max: parseInt(formData.salaryMax),
                currency: formData.currency
            },
            requirements: formData.requirements.split(',').map(req => req.trim()),
            responsibilities: formData.responsibilities.split(',').map(res => res.trim())
        };

        fetch('http://localhost:3000/jobs', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(processedData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your job has been posted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            navigate('/myPostedJobs')
        })

        console.log('Processed Form Data:', processedData);
        // Add your form submission logic here, like sending data to a backend
    };

    return (
  <>
  <Navbar></Navbar>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="card w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Add a Job</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Job Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter job title"
                            className="input input-bordered w-full"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Enter location"
                            className="input input-bordered w-full"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobType" className="block text-gray-700 font-medium mb-2">Job Type</label>
                        <input
                            type="text"
                            id="jobType"
                            name="jobType"
                            placeholder="Enter job type"
                            className="input input-bordered w-full"
                            value={formData.jobType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter category"
                            className="input input-bordered w-full"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="applicationDeadline" className="block text-gray-700 font-medium mb-2">Application Deadline</label>
                        <input
                            type="date"
                            id="applicationDeadline"
                            name="applicationDeadline"
                            className="input input-bordered w-full"
                            value={formData.applicationDeadline}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="salaryMin" className="block text-gray-700 font-medium mb-2">Salary Min</label>
                            <input
                                type="number"
                                id="salaryMin"
                                name="salaryMin"
                                placeholder="Min"
                                className="input input-bordered w-full"
                                value={formData.salaryMin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="salaryMax" className="block text-gray-700 font-medium mb-2">Salary Max</label>
                            <input
                                type="number"
                                id="salaryMax"
                                name="salaryMax"
                                placeholder="Max"
                                className="input input-bordered w-full"
                                value={formData.salaryMax}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="currency" className="block text-gray-700 font-medium mb-2">Currency</label>
                            <select
                                id="currency"
                                name="currency"
                                className="input input-bordered w-full"
                                value={formData.currency}
                                onChange={handleChange}
                            >
                                <option value="bdt">BDT</option>
                                <option value="usd">USD</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter job description"
                            className="textarea textarea-bordered w-full"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Enter company name"
                            className="input input-bordered w-full"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="requirements" className="block text-gray-700 font-medium mb-2">Requirements</label>
                        <input
                            type="text"
                            id="requirements"
                            name="requirements"
                            placeholder="Enter job requirements (comma-separated)"
                            className="input input-bordered w-full"
                            value={formData.requirements}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="responsibilities" className="block text-gray-700 font-medium mb-2">Responsibilities</label>
                        <input
                            type="text"
                            id="responsibilities"
                            name="responsibilities"
                            placeholder="Enter job responsibilities (comma-separated)"
                            className="input input-bordered w-full"
                            value={formData.responsibilities}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status</label>
                        <input
                            type="text"
                            id="status"
                            name="status"
                            placeholder="Enter status"
                            className="input input-bordered w-full"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hr_email" className="block text-gray-700 font-medium mb-2">HR Email</label>
                        <input
                        readOnly
                        defaultValue={user?.email}
                            type="email"
                            id="hr_email"
                            name="hr_email"
                            placeholder="Enter HR email"
                            className="input input-bordered w-full"
                            value={formData.hr_email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hr_name" className="block text-gray-700 font-medium mb-2">HR Name</label>
                        <input
                        defaultValue={user?.displayName}
                            type="text"
                            id="hr_name"
                            name="hr_name"
                            placeholder="Enter HR name"
                            className="input input-bordered w-full"
                            value={formData.hr_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company_logo" className="block text-gray-700 font-medium mb-2">Company Logo URL</label>
                        <input
                            type="url"
                            id="company_logo"
                            name="company_logo"
                            placeholder="Enter company logo URL"
                            className="input input-bordered w-full"
                            value={formData.company_logo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">Add Job</button>
                    </div>
                </form>
           
            </div>
        </div>
  <Footer></Footer>
  </>

    );
}

export default AddJob;