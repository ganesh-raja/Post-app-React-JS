import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">        
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Trending Post</h2>
            <p>Share your thoughts. Inspire the world.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Trending Post — Made with ❤️ for creators.</p>
        </div>
      </div>        
    </footer>
  )
}

export default Footer
