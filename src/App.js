import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Portfolio from "./Routes/Portfolio";
import Contact from "./Routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
