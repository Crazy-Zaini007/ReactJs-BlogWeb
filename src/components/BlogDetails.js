import React from 'react'
import {useParams}  from 'react-router-dom'
import useFetch from './useFetch.js'
import loading from "../images/loading.gif"
import {useNavigate} from 'react-router-dom'
import "../App.css"
// import BlogList from './BlogList.js'
export default function BlogDetails() {
    const { id }=useParams()
    const {mydata:myblogs, isPending, error}=useFetch('https://reactjs-blogweb-production.up.railway.app/blogs/'+id)

    const navigate=useNavigate()
    const deleteBlog=()=>{
      fetch('https://reactjs-blogweb-production.up.railway.app/blogs/' + myblogs.id, {
        method:'DELETE'
      })
      .then(()=>{
        navigate('/')


      })
      
    }
  return (
    <>
    
    <div className="container blog-detail">
        
        <h2>Blog Details: <span></span></h2>
         {isPending && <div className='text-center' >
      
      <img className='text-center my-4' src={loading} alt="loading"/>
     
    </div>} 

    {error &&
    <div>
        {error}
    </div>}

    {myblogs && (
        <div className="blog-detail-row row my-4" key={myblogs.id} >
          
          
          
            <div className="blog-detail-image col-md-4">
               
        <img className="mt-2 detail-image" src={myblogs.image} alt="images" />
            </div>
            <div className="col-md-3" id='blog-detail-title'>
            <h3>Blog Title: <span>{myblogs.title}</span></h3>
            <br />
            <h4 className=" text-end my-5">Written By:<span className=' p-2 rounded'>{myblogs.author}</span></h4>
            </div>
            <div className="col-md-4" id='blog-detail-body'>
            <p className="card-text"><span>Description: </span><br />{myblogs.body}</p>
            </div>
            <div className='blog-delete text-end my-4'>
              <button className='btn shadow' onClick={deleteBlog}><i class="fas fa-trash"></i></button>
            </div>
          
       

</div>
    )}
    </div>
    </>
  )
}
