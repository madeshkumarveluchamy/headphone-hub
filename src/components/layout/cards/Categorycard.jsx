import React from 'react'
import "./cards.css"

const categorycard = ({cat,index}) => {

  //split category title into two styled parts
  console.log(cat);
  
  const parts = (cat.title || "")
  

  //background style for card

  const bgStyle={
    backgroundImage:cat.bgColor,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundColor:cat.bgColor
  }
  return (
    <div className='cat-card d-flex align-content-center align-items-md-top p-4 mt-4' style={bgStyle}>
      {/*Left side text content*/}
      <div className='car-text ms-2 z-1'> 
        <p className='mb-1'>{cat.subtitle}</p>
        <p className='fs-4 fw-semibold mb-1'>{cat.title}</p>
        <p className='display-6 fw-bold opacity-25 mb-3'>{cat.name}</p>
        <button className='fw-bold btn btn-light btn-md px-4 py-2 rounded-pill'>
          Browse
        </button>

        {/* right side text content */}

        <div>
          <img src={cat.image} alt={cat.title} className='cat-image img-fluid'/>
        </div>

      </div>
    </div>
  )
}

export default categorycard
