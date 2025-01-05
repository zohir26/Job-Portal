import axios from 'axios';

import  { useEffect, useState } from 'react';

const useJobs = (sortBySalary,search, minSalary, maxSalary) => {
   const [jobs,setJobs]=useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
      axios.get(`http://localhost:3000/jobs?sortBySalary=${sortBySalary}&search=${search}&minSalary=${minSalary}&maxSalary=${maxSalary}`)
      .then(res => {
         setLoading(false)
         setJobs(res.data)
         console.log(res.data)
      })
      .catch(err => { setLoading(false); console.error(err); });
   },[sortBySalary,search,minSalary, maxSalary]) 
   return {jobs,loading}
};

export default useJobs;