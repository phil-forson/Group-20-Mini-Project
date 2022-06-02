import './App.css';
import React from 'react';
import Firstlandingpage from './components/Firstlandingpage.js';
import Secondlandingpage from './components/Secondlandingpage.js';
import Thirdlandingpage from './components/Thirdlandingpage.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Photographers  from './components/Photographers.js';
import { BrowserRouter } from "react-router-dom";
import { useRef } from 'react';

// gsap.registerPlugin(ScrollSmoother)

function App() {
  const containerRef = useRef(null)
  return (
    <BrowserRouter>
  <div className="App" >
        <Navbar />
        <Firstlandingpage />
        <Secondlandingpage />
        <Thirdlandingpage />
        <Photographers />
        <About />
  </div>

    </BrowserRouter>
  );
}

export default App;
