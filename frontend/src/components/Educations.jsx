import React from 'react'
import { education } from '../constent/constent'
import {motion} from 'motion/react'
const EducationDetails=({year,std,college,desc,result})=>{
return (
  <div className='relative '>
  <div  className='rounded-full  w-[20px] h-[20px] bg-purple-700 absolute left-[-20px] translate-x-[8px] top-[20px]' ></div>

  <motion.div
   
   initial={{ opacity: 0,
   }}
  whileInView={{ opacity:[0.2,0.6,1],
    x:[100,0]
   }}
  viewport={{
    amount:"all",
   once:true,
  }}
 transition={{
  duration: 1.5,
}}
  
   className="md:w-[500px] mx-[30px] mt-[30px] flex flex-col flex-wrap relative rounded-2xl shadow-md shadow-purple-700 p-6 
  after:content-[''] after:absolute after:left-[-20px] after:top-[18px] after:border-t-[12px] after:border-b-[12px] after:border-r-[20px] after:border-t-transparent after:border-b-transparent dark:after:border-r-gray-900 after:border-r-purple-200 ">
   <h1 className='font-bold text-2xl text-purple-700' >{year}</h1>
   <h1 className='font-bold italic text-2xl'>{std}</h1>
   <p className='italic text-xl'>{college}</p>
   <p className='text-xl text-justify'>{desc}</p>
   <h1 className='text-xl'>Percentage: <span>{result}</span></h1>
  </motion.div>
</div>

)
}

const Educations = () => {
  return (
    <div className=' my-[10rem] flex gap-[6rem] flex-col  items-center'>
      <h1  className='text-5xl text-center font-medium' >Education</h1>
       <div className='border-l-6  relative   '>

        {
          education.map((item,index)=>(
             <EducationDetails key={index} year={item.year}  std={item.std} college={item.college} desc={item.desc} result={item.result} />
          ))
        }
        


       </div>

    </div>
  )
}

export default Educations
