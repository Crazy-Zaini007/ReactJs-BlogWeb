import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogList({ blogList, myTitle}) {
    // const blogList=props.blogList;
    // const myTitle=props.myTitle;

   
  return (
    <>
    <div className='container home'>
     <div className="row justify-content-center p-4">
      <h2 className='my-3'>{myTitle} <span></span></h2>
      {blogList.map((myblog)=>(
         
        <div className="card col-md-3 blog-preview  m-3" key={myblog.id}>
          
          
          <img className="card-img-top rounded mt-2" src={myblog.image} alt="Card cap" />
  <div className="card-body p-4">
    <h3 className="card-title">{myblog.title}</h3>
    {/* <p className="card-text"  numberOfLines={4}>{myblog.body}</p> */}
    <h4 className="blog-author text-end"><span className=' p-2 rounded'>Written By:{myblog.author}</span></h4>
    <Link to={`/blogs/${myblog.id}`} className="btn text-start shadow blog-link">Details</Link>
    {/* <button onClick={()=>handleDelete(myblog.id)} type="button " className='btn text-end shadow'><i className="fas fa-trash"></i></button> */}

  </div>
</div>
       
      ))}
     </div>
    </div>

    </>
  )
}
