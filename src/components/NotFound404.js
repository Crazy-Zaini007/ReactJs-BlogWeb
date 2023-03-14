import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound404() {
  return (
    <div className='container notfound'>
        <div className="row justify-content-center">
            <div className="col-md-8">

                <h2 className='text-center my-1'>Sorry Not Found (404)!</h2>
                
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/media/bbcfd1a1fecd97c1835792283a601f10.gif" alt="" />

                
            </div>
            <div className="back my-2">
            <Link className='btn shadow fas fa-arrow-alt-left' to='/'> HomePage</Link>
            </div>
        </div>
      
    </div>
  )
}
