import React from 'react';
import banner from '../assets/job-banner.jpg.jpg'
import banner2 from '../assets/job-banner-2.jpg'
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row h-[600px] ">
          <motion.img
            src={banner}
            animate={{y:[-10,50,0]}}
            transition= {{duration:5,
                repeat: Infinity, 
            }}

            className="max-w-sm rounded-t-[40px] rounded-br-[40px]  shadow-2xl border-l-8 border-b-8 border-blue-400" />


<motion.img
            src={banner2}
            animate={{x:[0,50,0]}}
            transition= {{duration:5,
                repeat: Infinity, 
            }}

            className="max-w-sm rounded-t-[40px] rounded-br-[40px]  shadow-2xl border-l-8 border-b-8 border-blue-400" />

          <div className='w-[50%]'>
            <motion.h1
            animate={
                {
                    y:[0,20,0],
                   color:['#d2be28','#3bd228','#2830d2'
                   ]
                   
                }
               
            }
            transition= {{duration:10, repeat:Infinity }}
            
            
            className="text-5xl font-bold">Job Searching News!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;