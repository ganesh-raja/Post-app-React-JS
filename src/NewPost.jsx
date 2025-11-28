import React from 'react'

const NewPost = ({handleSubmit, title, setTitle, content, setContent}) => {
  return (
    <form className="post-form" onSubmit={handleSubmit}>
    <h2>New Post</h2>

    <div className="form-group">
        <label htmlFor="ptitle">Title</label>
        <input
        type="text"
        id="ptitle"
        placeholder="Enter your post title"
        required
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    </div>

    <div className="form-group">
        <label htmlFor="pcontent">Content</label>
        <textarea
        id="pcontent"
        placeholder="Write something interesting..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        ></textarea>
    </div>

    <button type="submit" className="submit-btn">
        Post
    </button>
    </form>
  )
}

export default NewPost
