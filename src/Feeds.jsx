import React from 'react'
import { Link } from 'react-router-dom'

const Feeds = ({item}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className='card overflow-y-auto'>
        <div className="card-body">
          <Link to={`/post/${item.id}`}>
            <p className="card-title">{item.title}</p>
            <p className="card-date">{item.date}</p>
            <p className="card-content">{item.content.length > 60 ? item.content.slice(0, 60) + "..." : item.content}</p>
          </Link>
        </div>
      </div>
    </div>    
  )
}

export default Feeds
