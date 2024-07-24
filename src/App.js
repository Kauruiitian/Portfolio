// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
/*import Navbar from './components/Navbar';*/
import Home from './components/Home';

import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import backgroundImage from './assets/pxfuel (3).jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Projects/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
