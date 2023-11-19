import React, { useState } from 'react';
import "./NavbarStyle.css";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [hamburg, setHamburg] = useState(false);
    const handleHamburg =() => setHamburg (!hamburg);

    const [color, setcolor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setcolor(true);
        }else{
            setcolor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color? "navBar navBar-bg" : "navBar"}>
        <Link to="/">
            <h1 className='logo'>Peter <span className='logo-2'>Ajala</span></h1>
        </Link>
        <ul className={hamburg ? "nav_links active" : "nav_links"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            
            <a className='btn' href="https://drive.google.com/file/d/1r-eR1S6QuXc-McWw5JuuT_sAmiAv0knZ/view">Resume</a>
        </ul>

        <div className="hamburger" onClick={handleHamburg}>
            {hamburg ? (<FaTimes size={20} style={{color:"white"}} />) : (<FaBars size={20} style={{color:"white"}} />)}
            
            
        </div>
    </div>
  )
}

export default Navbar