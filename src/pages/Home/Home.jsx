import React from 'react'
import HeroSlider from '../../components/layout/Hero/HeroSlider'
import { categories }from "../../constants/data"
import Categorycard from '../../components/layout/cards/categorycard'
import { h1 } from 'framer-motion/client'

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <section className='category-section section-spacing'>
        <div className='container'>
          <div className='row'>
            {/* loop through all categories*/}
            {categories.map((cat,index)=>(
                (
                  <div className='col-lg-6 col-md-12 mb-4' key={index}>
                    <Categorycard cat={cat} index={index}/>
                    {console.log(cat)}
                    
                  </div>
                  
                )
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
