import React from 'react';
import {Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Forms';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Pricing from './Components/Pricing';


const App = () => {
  return (
    <div>
      <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "About"  element = {<About/>}/>
          <Route path = "Contact" element = {<Contact/>}/>
          <Route path = "Pricing" element = {<Pricing/>}/>
      </Routes>
      
    </div>
  );
}
 
export default App;
