import React from 'react'
import SearchItems from './SearchItems'

const SearchBar = ({searchPost, setSearchPost, searchResult, emptySearch, searchFocus}) => {
  return (
    <div className='form-search position-relative' >
      <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Search Post...' value={searchPost} 
        className='form-control'        
        onChange={(e)=>setSearchPost(e.target.value)}  onFocus={searchFocus}/>
      </form>
      
      <div className='container position-absolute hide' id="search-item">
        {searchResult !== "" &&
        <ul className='list-group'>
          {searchResult.map(sitems => 
            <SearchItems key={sitems.id} sitems={sitems}/>
          )}          
        </ul> 
        }       
      </div>      
    </div>
  )
}

export default SearchBar
