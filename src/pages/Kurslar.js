import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Courses from "../container/Courses/Courses";
import Mentor from '../container/Mentor/Mentor';
import Event from '../container/Event/Event';
import Footer from '../components/Footer/Footer';
const Kurslar = () => {
  return (
    <>
        <Navbar/>
        <Courses/>
        <Mentor/>
        <Event/>
        <Footer/>
    </>
  )
}

export default Kurslar