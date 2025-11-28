import React from 'react'
import Feeds from './Feeds'
import { Link } from 'react-router-dom'


const Home = ({items}) => {
  if (!items.length) {    
    return (
        <div className="post-not-found">
            <h2>No Post</h2>
            <Link to="/post">Add Post</Link>
        </div>
        )
    }
  return (
    <div className='feed-container'>
    {items.map(item => 
        <Feeds key={item.id} item={item} />
    )}
    </div>
  )
}

export default Home
