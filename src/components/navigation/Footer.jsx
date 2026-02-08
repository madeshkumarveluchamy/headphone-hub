import React from 'react'
import './navigation.css'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className='container'>
        <div className='row d-flex gap-3'>
          <div className='col-md-3'>
            <h1 className='logo'> Web Crafters</h1>
          </div>
          <div className='col-lg-2'>
            <h1 className='footer-title'>Visit Link</h1>
            <ul className='list'>
              <li>shop</li>
              <li>Privacy</li>
              <li>Terms & Conditions</li>

            </ul>
          </div>

          <div className='col-lg-2'>
            <h1 className='footer-title'>Company</h1>
            <ul className='list'>
              <li>Home</li>
              <li>About Us</li>
              <li></li>Contact

            </ul>
          </div>

          <div className='col-lg-2'>
            <h1 className='footer-title'>Contact</h1>
            <ul className='list'>
              <li>+91 987654321</li>
              <li>Info@yourdomain.com</li>
              

            </ul>
          </div>

          <div className='col-lg-2 ms-lg-4 '>
            <h1 className='footer-title'>Contact</h1>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, possimus.
           </p>
          </div>
          </div>
          <div className='row border-top mt-3'>
            <div className='col-12 my-4'>
              <p className='text-muted'>@2025 By Web Crafters. All rights reserved</p>
            </div>

          </div>
        
      </div>

      </footer>
      
    </div>
  )
}

export default Footer
