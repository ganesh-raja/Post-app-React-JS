import React from 'react'
import { Link } from 'react-router-dom'

const Feeds = ({item}) => {
  return (
    <div className='post-card'>
      <Link to={`/post/${item.id}`}>
      <p className="post-title">{item.title}</p>
      <p className="post-date">{item.date}</p>
      <p className="post-content">{item.content.length > 60 ? item.content.slice(0, 60) + "..." : item.content}</p>
      </Link>
    </div>
  )
}

export default Feeds
