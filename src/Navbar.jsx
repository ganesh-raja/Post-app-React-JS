import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
        <nav className={`nav-bar ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" className={({isActive})=> isActive ? "active" : ""} >Home</NavLink>
            <NavLink to="/post" className={({isActive})=> isActive ? "active" : ""} >Post</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "active" : ""} >About</NavLink>
        </nav>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </>
  )
}

export default Navbar
