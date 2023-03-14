
import BlogList from './BlogList';
import loading from "../images/loading.gif"
import useFetch from './useFetch';
import "../App.css"
export default function Home() {


  const {mydata:blogs, isPending,error}=useFetch('http://localhost:8000/blogs')


  
  return (
    <>
    
    {/* <button className='btn shadow'onClick={()=>setname('oops!')}>Change name</button>
    <p>{name}</p> */}

{error && <div className='text-center error-gif'>
  <h6 className='text-center'>Facing Some Technical Issues!</h6>
  <img className='rounded' src="https://cdn.dribbble.com/users/2059463/screenshots/4828654/media/2582b93aa19ccba29e0ba49bed29de06.gif" alt="" />
</div>}

    {isPending && 
    <div className='text-center' >
      
      <img className='text-center my-4' src={loading} alt="loading"/>
     
    </div>}
   {blogs && <BlogList blogList={blogs}  myTitle="My Blogs:"/>}

{/* if we want to filter data  */}
    {/* <BlogList blogList={blogs.filter((blog)=>blog.author==="Zainullah")} myTitle="My Blogs:"/>   */}
    </>
  )
}
