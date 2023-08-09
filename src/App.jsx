import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Footer from './components/footer';
import Works from './components/works';
import StudyCase from './components/studycase';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/:studyUrl' element={<StudyCase />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
