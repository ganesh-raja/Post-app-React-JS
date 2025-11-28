import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({items, handleDelete}) => {
    const {id} = useParams()
    const iPost = items.find(item => (item.id).toString() === id)
    
    if (!iPost) {    
    return (
        <div className="post-not-found">
            <h2>Post Not Found 😕</h2>
            <Link to="/">Go Back</Link>
        </div>
        )
    }
  return (
    <>  
        <div className=''>
            <Link to="/"><button type='button' className="backbtn">Back</button></Link> 
        </div>
        <form className='delForm' onSubmit={(e)=>e.preventDefault()}>
                   
            <div className="post-detail">
            <h2 className="post-detail-title">{iPost.title}</h2>
            <p className="post-detail-date">{iPost.date}</p>
            <div className="post-detail-content">
                <p>{iPost.content}</p>
            </div>
            </div>
            
            <button type='button' className="delbtn" onClick={()=>handleDelete(id)}>Delete Post</button>
        </form>  
    </> 
  )
}

export default Post
