import React from 'react'
import { Link } from 'react-router-dom'

const SearchItems = ({sitems}) => {
  return (
    <Link className="search-item-link" to={`/post/${sitems.id}`}><li className='list-group-item'>{sitems.title}</li></Link>
  )
}

export default SearchItems
