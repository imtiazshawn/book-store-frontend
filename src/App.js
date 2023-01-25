import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Books from './Pages/Books';
import AddBooks from './Pages/AddBooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/books' element={ <Books/> }/>
          <Route path='/addbooks' element={ <AddBooks/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
