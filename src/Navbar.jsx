import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button className="navbar-toggler mt-3 mt-sm-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse mt-2 mt-sm-0" id="navbarNav">
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'><NavLink to="/" className={({isActive})=> isActive ? "nav-link active" : "nav-link"} >Home</NavLink></li>
          <li className='nav-item'><NavLink to="/post" className={({isActive})=> isActive ? "nav-link active" : "nav-link"} >Post</NavLink></li>
          <li className='nav-item'><NavLink to="/about" className={({isActive})=> isActive ? "nav-link active" : "nav-link"} >About</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
