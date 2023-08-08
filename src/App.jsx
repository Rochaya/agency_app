import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'
import About from './components/about'
import Footer from './components/footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
