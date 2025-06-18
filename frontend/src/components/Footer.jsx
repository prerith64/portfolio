import { Contact, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { socialLink } from '../constent/constent'
const Footer = () => {
  return (
    <div className='bg-black/90   border-t-2 border-gray-400 text-white w-full   relative bottom-0 '>
    
         <div className='flex  flex-col  md:flex-row container mx-auto py-4  items-center gap-6 justify-between'>
        <div className='flex gap-6'>
            <a href={socialLink.github} ><Github className='p-2 box-content rounded-xl hover:bg-gray-600   cursor-pointer hover:-translate-y-1.5 ease-in-out duration-300  bg-[#001219]' /> </a>
        <a href={socialLink.linkedin}><Linkedin className='p-2 box-content rounded-xl hover:bg-gray-600    cursor-pointer hover:-translate-y-1.5 ease-in-out duration-300 bg-[#001219]' /> </a>
        </div>
        <ul className='flex flex-col md:flex-row gap-6'>
            <li className='flex items-center gap-4'> <Contact className='inline rounded-xl box-content p-2 hover:bg-gray-600    cursor-pointer hover:-translate-y-1.5 ease-in-out duration-300 bg-[#001219] ' />  Contact - +91 8088456821 </li>
            <li  className='flex items-center gap-4' > <Mail className='inline rounded-xl p-2 box-content hover:bg-gray-600   cursor-pointer hover:-translate-y-1.5 ease-in-out duration-300  bg-[#001219]' /> Email - prerithshetty6@gmail.com</li>
        </ul>
      </div>
     
    </div>
  )
}

export default Footer
