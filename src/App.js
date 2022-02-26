import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Courses from './container/Courses/Courses';
import FindCourse from './container/FindCourse/FindCourse';
import Mentor from './container/Mentor/Mentor';
import Work from './container/Work/Work';
import Event from './container/Event/Event';
import Status from './container/Status/Status';
import Blog from './container/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <FindCourse/>
      <Work/>
      <Courses/>
      <Mentor/>
      <Event/>
      <Status/> 
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
