import { useEffect, useState } from "react";
import HotJobsCard from "../Home/HotJobsCard";



const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/jobs')
    .then(res=>res.json())
    .then(data=>setJobs(data))
  },[])

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 space-y-4">
          {
            jobs.map(job=><HotJobsCard key={job._id} job={job}></HotJobsCard>)

          
          }  
        </div>
    );
};

export default HotJobs;