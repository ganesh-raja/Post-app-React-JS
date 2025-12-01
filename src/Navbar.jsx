import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse mt-2 mt-sm-0" id="navbarNav">
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'><NavLink to="/" className={({isActive})=> isActive ? "nav-link active" : "nav-link"} >Home</NavLink></li>
          <li className='nav-item'><NavLink to="/post" className={({isActive})=> isActive ? "nav-link active" : "nav-link"} >Post</NavLink></li>
          <li className='nav-item'><NavLink to="/about" className={({isActive})=> isActive ? "nav-link active" : "nav-link"} >About</NavLink></li>
        </ul>
      </div> 
        
        {/* <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div> */}
    </>
  )
}

export default Navbar
