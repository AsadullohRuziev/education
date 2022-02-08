import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import FindCourse from './container/FindCourse/FindCourse';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <FindCourse/>
      <Footer/>
    </div>
  );
}

export default App;
