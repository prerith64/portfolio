import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Educations from './components/Educations'
import Skill from './components/Skills'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
      <div className='bg-white dark:bg-[#001219]  w-full -z-20 h-full fixed transition-colors duration-500'></div>
          <Navbar />
          <div className='p-6 container text-black dark:text-white  mx-auto transition-colors duration-500 rounded-xl relative top-16 '>
            
<div  id="profile">
  <Profile />
</div>

<div  id="skills">
  <Skill />
</div>

<div  id="education">
  <Educations />
</div>

<div  id="projects">
  <Projects />
</div>
      </div>
<Footer />
    </div>


    // <div className="bg-white dark:bg-black text-black dark:text-white p-10">
    //   <h1>Hello World</h1>
    // </div>


  )
}

export default App
