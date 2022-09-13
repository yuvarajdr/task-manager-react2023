import React, { Component, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";

import Home from "./components/Home";

class App extends Component {
  render(){
  return (
    
    <Router>
        <div style={{display:"flex", flexDirection:"row",width:"100%",padding:"20px"}}>
          <div style={{margin:'10px'}}>
            <Link to="/">Home</Link>
          </div>
          <div style={{margin:'10px'}}>
            <Link to="/about">About</Link>
          </div>
          <div style={{margin:'10px'}}>
            <Link to="/contact">Contact</Link>
          </div>
          <div style={{display:'flex', justifyContent:'flex-end',width:'-webkit-fill-available',margin:'10px'}}>
            <img src="/pic/photo.jpg" alt="Yuvaraj" style={{height:'40px',width:'40px'}}/>
          </div>
        </div>
     
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
    </Routes>
    </Router>
    
  );
}
}

export default App;
