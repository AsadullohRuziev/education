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
import Students from './container/Students/Students';
import Home from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { navbar } from './utils/navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        {navbar.map(({path, id, Element}) => (
        <Route key={id} path={path} element={<Element/>}/>
        ))}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;