import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Techprofile from '../components/Techprofile';
import Projects from '../components/Projects';
import Experinec from '../components/Experinec';
import Edu from '../components/Edu';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
function App() {
  return (
    <>
    <div className='text-bg-dark p-3'>
   <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<Techprofile />} />
        <Route path="/work" element={<Experinec/>} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;
