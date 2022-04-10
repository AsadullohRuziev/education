import './App.css';
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