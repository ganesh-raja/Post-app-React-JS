import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Error from './Error'
import About from './About'
import NewPost from './NewPost'
import Post from './Post'

function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("post_items")) || [])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [searchPost, setSearchPost] = useState("")
  const [searchResult, setSearchResult] = useState([]) 
  const [pageItems, setPageItems] = useState([]) 
  const navigate = useNavigate();

  useEffect(()=>{    
    const itemsList = items.filter(item => (item.title.toLowerCase()).includes(searchPost.toLowerCase()) 
                                  || (item.content.toLowerCase()).includes(searchPost.toLowerCase()))
    const reversed = [...itemsList].reverse()    
    
    setPageItems(reversed)    
  }, [items])

  useEffect(()=>{

    if (searchPost !== "")
    {
      const itemsList = items.filter(item => (item.title.toLowerCase()).includes(searchPost.toLowerCase()) 
                                  || (item.content.toLowerCase()).includes(searchPost.toLowerCase()))
      const reversed = [...itemsList].reverse()

      setSearchResult(reversed)
    }
    else {
      setSearchResult("")
    }  
    
  }, [searchPost])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = items.length ? items[items.length-1].id + 1 : 1
    const ptitle = title
    const pcontent = content
    const pdate = new Date().toISOString().split("T")[0];
    const addItem = [...items, {"id":id, "title":ptitle, "date":pdate, "content":pcontent }]
    setItems(addItem)
    localStorage.setItem("post_items", JSON.stringify(addItem))
    setTitle("")
    setContent("")
    setSearchPost("")  
    navigate("/")  
  }
  
  const handleDelete = (id) => {
    const delPost = items.filter(item => (item.id).toString() !== id)
    setItems(delPost)
    localStorage.setItem("post_items", JSON.stringify(delPost))
    setSearchPost("")  
    navigate("/")   
  } 

  const emptySearch = () => {
    document.getElementById("search-item").style.display = "none"
  }

  const searchFocus = () => {
    document.getElementById("search-item").style.display = "block"
    setSearchResult(searchResult)
  }

  return (
    <>
    <Header       
      searchPost={searchPost} 
      setSearchPost={setSearchPost}
      searchResult={searchResult} 
      emptySearch={emptySearch}
      searchFocus={searchFocus}          
    />     
    <Routes>
      <Route path="/" element={<Home items={pageItems} />}/>
      <Route path="/about" element={<About />}/>      
      <Route path="/post" >
        <Route index element={<NewPost 
          handleSubmit= {handleSubmit}
          title= {title}
          setTitle= {setTitle}
          content= {content}
          setContent= {setContent}          
        />}/>
        <Route path=":id" element={<Post items={items} handleDelete={handleDelete}/>}/>
      </Route>
      <Route path="*" element={<Error />}/>      
    </Routes>    
    <Footer />      
    </>
  )
}

export default App
