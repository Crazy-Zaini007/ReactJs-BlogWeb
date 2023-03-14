import React from 'react'
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
export default function Carousel() {
  return (
    <>
      
      <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
     
  <div className="carousel-inner rounded">
    <div className="carousel-item "  interval="1000"> 
      <img className="d-block w-100" src={blog1} alt="First slide" />
    </div>
    <div className="carousel-item " interval="1000">
      <img className="d-block w-100" src={blog2} alt="Second slide"   />
    </div>
    <div className="carousel-item active"  interval="1000">
      <img className="d-block w-100" src={blog3}alt="Third slide" />
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span  className="fas fa-caret-left" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="fas fa-caret-right" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
 
</div>
    </>
  )
}
