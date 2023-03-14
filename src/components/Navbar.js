import React from 'react'

import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar shadow fixed-top ">
        <h1 className=''><Link className='my-1 mx-2' to="/">Dev Blogs</Link></h1>
        <div className="links">
            <Link className='fas fa-home' to="/">Home</Link>
            <Link className='fas fa-plus-circle' to="/create">New Blog</Link>
        </div>
    </nav>

    <div className='margin'></div>

    
    </>
  )
}
