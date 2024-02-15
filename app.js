import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function app(){
    const [loading ,setloading]=useState(true)
    const [jobs , setJobs]=useState([]);
    const[values, setValues]=useState(0);
    
   // fetching jobs
   const fetchJobs= async () => {
    const response= await fetch(url);
    const newjobs= await response.json();
    setJobs(newjobs);
    setloading(false);
   }

   useEffect(()=>{fetchJobs()},[])
   if(loading){
   return (
    <section className="section loading">

<h1>loading...</h1>

    </section>
   )
   }
 const {company,dates,duties,title} =jobs[values];


    return (

    <section className='section'>
        <div className='title'>
            <h2>experience</h2>
            <div className='underline'></div>
        </div>
        <div className='jobs-center'>
            <div className='btn-container'>
      {    jobs.map((item,index)=>{
         return (
            <button key="item.id"
            onClick={()=>setValues(index)}
            className={`job-btn ${index === value && 'active-btn'}`}
            >

                {item.company}
            </button>
         )       
      })

      }
      
            </div>
            

       

            <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}
export default App