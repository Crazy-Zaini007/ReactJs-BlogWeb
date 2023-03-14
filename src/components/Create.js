import React,{useState} from 'react'
import blog from"../images/blog-writing.png"
import {useNavigate} from 'react-router-dom'


export default function Create() {
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState('Zainullah')
  const [image, setImage] = useState()
  const [body, setBody] = useState()
  
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog= {title, author, image, body}
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},  // to tell the server the type of content we are sending
      body: JSON.stringify(blog)  // to convert the givern data into json

    })
    
    .then(()=>{
      setTimeout(() => {
        console.log('New Blog Added');
      navigate('/');
      }, 1000);
    
    })
  
  }
  return (
    <>

    <div className="container" id='create'>
       
        <div className="row justify-content-center">
          <div className="col-md-6 blog-image text-center">
            <div className="blogImage text-center">
            <img className='text-center' src={blog} alt="" />

            </div>
          </div>
            <div className="col-md-6">
              
            <form onSubmit={handleSubmit}>

 <h4 className='text-start'>Add New Dev Blog <span></span></h4>

  <div className="form-group my-4">
    <label htmlFor="blog_title">Blog Title:</label>
    <input value={title} type="text" className="form-control input shadow" id="blog_title"  required  onChange={(e)=>setTitle(e.target.value)}/>
    
  </div>
  <div className="form-group my-4">
    <label htmlFor="author_name">Author Name:</label>
    <select className="form-control input shadow" value={author} onChange={(e)=>setAuthor(e.target.value)}>
    <option value='Zainullah' id="author_name"  required >Zainullah </option>
    <option value='Dany' id="author_name"  required >Danny </option>
    <option value='Taylor' id="author_name"  required >Taylor </option>
    </select>
    
  </div>
  <div className="form-group  my-4">
  <label htmlFor="blog_image">Image URL:</label>
    <input value={image} onChange={(e)=>setImage(e.target.value)} type="url" className="form-control input shadow" id="blog_image" required />
    
  </div>

  <div className="form-group  my-4">
  <label htmlFor="blog_description">Blog Description:</label>
    <textarea value={body} onChange={(e)=>setBody(e.target.value)} type="text" className="form-control text-area shadow" rows='5' id="blog_description" required> </textarea>
    
  </div>
  <button type="submit" className="btn submit shadow ">Add New <i className="fas fa-arrow-alt-right text-white"></i></button>
</form>
            </div>
            
        </div>
    </div>
    </>
  )
}
