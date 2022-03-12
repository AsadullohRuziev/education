import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import FindCourse from '../../container/FindCourse/FindCourse'
import Work from '../../container/Work/Work'
import Courses from '../../container/Courses/Courses'
import Mentor from '../../container/Mentor/Mentor'
import Event from '../../container/Event/Event'
import Status from '../../container/Status/Status'
import Blog from '../../container/Blog/Blog'
import Students from '../../container/Students/Students'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
      <Header/>
      <FindCourse/>
      <Work/>
      <Courses/>
      <Mentor/>
      <Event/>
      <Status/> 
      <Blog/>
      <Students/>
      <Footer/>
    </>
  )
}

export default Home