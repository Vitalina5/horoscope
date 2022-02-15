import React from 'react';
import Home from './Home';
import Horoscope from './Horoscope';
import Calendar from './Calendar';
import Names from './Names';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return ( <Router>
    <nav>
      <Link to="/" className="link">Главная</Link>
      <Link to="/horoscope" className='link'>Гороскоп</Link>
      <Link to="/calendar" className='link'>Календарь</Link>
      <Link to="/names" className='link'>Имена</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/horoscope" element={<Horoscope />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/names" element={<Names/>} />
    </Routes>
</Router>
  );
}

export default App;
