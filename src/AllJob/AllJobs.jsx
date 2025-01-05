import React, { useState } from 'react';
import useJobs from '../Hooks/useJobs';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import HotJobsCard from '../pages/Home/HotJobsCard';
import Loading from '../components/Loading';
import sortBy from 'sort-by';

const AllJobs = () => {
   
   const [sortBySalary, setSortBySalary]= useState(false);
   
   const [search, setSearch]= useState("");

   const {jobs, loading} = useJobs(sortBySalary,search);
   if(loading){
    return <Loading></Loading>
   }

   console.log(sortBySalary)
   return (
       <>
       <Navbar></Navbar>
        <div className='container flex justify-center items-center gap-3'>
            <button onClick= {()=>setSortBySalary(!sortBySalary)}
            // here the sort button will toggle, if the button is clicked then sort and if again clicked the sort will be false. it will toggle the state.
            className={`btn btn-neutral ${sortBySalary && 'btn-success'} `}
            >{
                sortBySalary == true ? "Sorted By Salary" : "Sort By Salary"
            }</button>

            <input
             type="text" name="" 
             className=" border border-lime-300 p-4 w-full max-w-2xl rounded-lg" placeholder='Search job by location' 
             // hold the search data
             onKeyUp={(e)=>setSearch(e.target.value)}
             
             id="" />

        </div>
       <div>
           <h1 className='text-3xl bold text-center py-10'>All jobs {jobs.length}</h1>

           <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 space-y-4 justify-center items-center">
          {
            jobs.map(job=><HotJobsCard key={job._id} job={job}></HotJobsCard>)

          
          }  
        </div>

        </div>
       <Footer></Footer>
       </>
    );
};

export default AllJobs;