import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";


const App = ()=> {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
          
        
        <Route path='/about' element={<About/>}/>
          
        
        <Route path='/skills' element={<Skills/>}/> 
          
        
        <Route path='/contact' element={<Contact/>}/>
        
      
      </Routes>
    </Router>
  );
};

export default App;
