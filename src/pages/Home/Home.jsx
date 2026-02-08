import React from 'react'
import HeroSlider from '../../components/layout/Hero/HeroSlider'
import { categories,features,bannerDes,products,bannerDes2 }from "../../constants/data"
import Categorycard from '../../components/layout/cards/categorycard'
import { div, h1 } from 'framer-motion/client'
import Banner from '../../components/layout/banner/Banner'
import ProductCard from '../../components/layout/cards/ProductCard'

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <section className='category-section section-spacing mt-4'>
        <div className='container'>
          <div className='row'>
            {/* loop through all categories*/}
            {categories.map((cat,index)=>(
                (
                  <div className={index===2||index===3?"col-lg-6 col-md-12 mb-4":"col-lg-3 col-md-12 mb-4"} key={index}>
                    <Categorycard cat={cat} index={index}/>
                    
                    
                  </div>
                  
                )
              ))}
          </div>
        </div>
      </section>
      <section className='feature-section section-spacing mt-2'>
        <div className='container'>
          <div className='row'>

          {features.map((val,index)=>{
            return (
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-md-0' key={index}>
                <div className='features-item d-flex align-items-center flex-column flex-sm-row'>
                  <div className='feature-icon me-sm-3 me-0 mb-2 mb-sm-0'>
                    {val.icon}
                  </div>
                  <div className='feature-text text-center text-sm-start'>
                    <h5 className='fw-bold mb-0'>{val.title}</h5>
                    <p className='mb-0 text-muted'>{val.description}</p>
                  </div>
                </div>

              </div>
            )
          })}

          </div>
        </div>
      
    </section>

    {/* banner */}


    <Banner bannerInfo={bannerDes}/>

    <section className='product-section'>
          <div className='container'>
            <h2 className='section-title text-center fw-bold mb-5'>
              Best Seller Products
            </h2>
            <div className='row'>
              {
                products.map((product,index)=>{
                  return(
                  <div className="col-lg-3 col-md-6 col-12">
                      <ProductCard product={product} key={index} />
                  </div>)
                })
              }

            </div>
          </div>
    </section>
    

    <Banner bannerInfo={bannerDes2}/>
    </div>

     
    
  )
}

export default Home
