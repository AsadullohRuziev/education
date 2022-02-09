import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Courses from './container/Courses/Courses';
import FindCourse from './container/FindCourse/FindCourse';
import Work from './container/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <FindCourse/>
      <Work/>
      <Courses/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
