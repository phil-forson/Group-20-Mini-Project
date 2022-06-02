import './App.css';
import React from 'react';
import Firstlandingpage from './Firstlandingpage.js';
import Secondlandingpage from './Secondlandingpage.js';
import Thirdlandingpage from './Thirdlandingpage.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Photographers  from './Photographers.js';
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
