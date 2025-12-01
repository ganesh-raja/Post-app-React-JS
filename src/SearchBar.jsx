import React from 'react'
import SearchItems from './SearchItems'

const SearchBar = ({searchPost, setSearchPost, searchResult, emptySearch}) => {
  return (
    <div className='form-search'>
      <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Search Post...' value={searchPost} 
        className='form-control'        
        onChange={(e)=>setSearchPost(e.target.value)} onBlur={emptySearch}/>
      </form>
      {searchResult !== "" &&
      <div>
        <ul>
          {searchResult.map(sitems => 
            <SearchItems key={sitems.id} sitems={sitems}/>
          )}          
        </ul>        
      </div>
      }
    </div>
  )
}

export default SearchBar
