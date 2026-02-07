import React from 'react'
import {motion} from 'framer-motion'
import "./cards.css"
 
const ProductCard = ({product,index}) => {

 const cardVariants={
   hidden: { opacity: 0, y: 18, scale: 0.99 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      Transition: {
        type: "spring",
        stiffness: 110,
        damping: 16,
       
        delay: 0.08 * i,
      },
    }),
 }

  return (
    <motion.div className='product-card-wrapper' variants={cardVariants} custom={index} inital="visible" transition={0.7|0.3} viewport={{once:true}}>
      {/* Product Card */}
      <div className='card product-card mb-4 border-0'>
        {/* Product Image */}
        <div className='card-img position-relative'>
          <img src={product.img} alt={product.title} className='img-fluid rounded-2 product-image widthh'/>
          {/* Product content */}
          <div className='card-des mt-3 mb-3'>
            <h4 className='card-title transition-color'>
              {product.title}
            </h4>
            <h5 className='fw-bold price'>
              {product.price}
            </h5>
             <button className='btn add-to-cart btn-primary btn-md rounded-pill fw-bold mt-3'>Add To Card</button>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default ProductCard
