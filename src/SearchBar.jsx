import React from 'react'
import SearchItems from './SearchItems'

const SearchBar = ({searchPost, setSearchPost, searchResult, emptySearch, searchFocus}) => {

  document.addEventListener("click", function (e) {
    const target = document.getElementById("search-form1");
    const box = document.getElementById("search-item");

    if (box != null) {
        if (!target.contains(e.target)) {
            box.style.display = "none";
        }
    }
  })

  return (
    <div className='form-search position-relative' >
      <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='Search Post...' value={searchPost} 
        className='form-control' id="search-form1"       
        onChange={(e)=>setSearchPost(e.target.value)}  onFocus={searchFocus}/>
      </form>
      
      <div className='container-fluid position-absolute hide' id="search-item">
        {searchResult.length > 0 &&
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
