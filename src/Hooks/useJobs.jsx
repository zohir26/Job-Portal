import axios from 'axios';

import  { useEffect, useState } from 'react';

const useJobs = (sortBySalary) => {
   const [jobs,setJobs]=useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
      axios.get(`http://localhost:3000/jobs?sortBySalary=${sortBySalary}`)
      .then(res => {
         setLoading(false)
         setJobs(res.data)
         console.log(res.data)
      })
      .catch(err => { setLoading(false); console.error(err); });
   },[sortBySalary]) 
   return {jobs,loading}
};

export default useJobs;