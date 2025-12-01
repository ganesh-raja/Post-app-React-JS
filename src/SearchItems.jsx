import React from 'react'
import { Link } from 'react-router-dom'

const SearchItems = ({sitems}) => {
  return (
    <li className='list-group-item'><Link className="search-item-link" to={`/post/${sitems.id}`}>{sitems.title}</Link></li>
  )
}

export default SearchItems
