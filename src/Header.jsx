import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Header = ({searchPost, setSearchPost, searchResult, emptySearch}) => {
  return (
    <header className="Header">
        <div className='header-container'>
        <Link to="/" className="logo-link">
          <img
            src="/src/assets/logo.svg"
            alt="Trending Post Logo"
            className="logo-img"
          />
        </Link>
            <SearchBar searchPost={searchPost} setSearchPost={setSearchPost} searchResult={searchResult}
              emptySearch ={emptySearch}
            />
            <Navbar />
        </div>
    </header>
  )
}

export default Header 
