import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Header = ({searchPost, setSearchPost, searchResult, emptySearch, searchFocus}) => {
  return (
    <header className="Header p-2">
      <nav className='navbar navbar-expand-lg'>
        <div className="container">          
          <Link to="/" className="nav-brand">
            <img
              src="/src/assets/logo.svg"
              alt="Trending Post Logo"
              className="logo-img"
            />
          </Link>        
          <SearchBar searchPost={searchPost} setSearchPost={setSearchPost} searchResult={searchResult}
            emptySearch ={emptySearch}
            searchFocus={searchFocus}
          />          
          <Navbar />
        </div>  
      </nav>
    </header>
  )
}

export default Header 
