import './App.css';
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import Register from './pages/Register';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>create account</Link></li>
        </ul>
      </nav>
    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
    </>
  )
}

export default App;
