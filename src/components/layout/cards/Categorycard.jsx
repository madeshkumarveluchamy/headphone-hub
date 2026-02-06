import React, { useEffect, useRef } from "react";
import "./cards.css";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const categorycard = ({ cat, index }) => {
  //reference to the card container
  const ref = useRef(null);
  //detect when the card enters 25% of the viewport (trigger once)
  const inview = useInView(ref, { amount: 0.25, once: true });

  //animation controller for reveal animation
  const controls = useAnimation();

  //split category title into two styled parts
  console.log(cat);

  //start reveal animation when card becomes visible
  useEffect(() => {
    if (inview) controls.start("visible");
  }, [inview, controls]);

  const parts = cat.title || "";

  //track scroll progress for parallax animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  //horizontal parallax movement for image
  const imgMove = 18;
  const imgX = useTransform(scrollYProgress, [0, 1], [0, imgMove]);

  //card reveal animation :fade,slide up, and scale
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      Transition: {
        type: "spring",
        stiffness: 110,
        damping: 16,
        mass: 0.6,
        delay: 0.12 * i,
      },
    }),
  };

  //background style for card

  const bgStyle = {
    backgroundImage: cat.bgColor,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: cat.bgColor,
  };
  return (
    <motion.div
      className={
        //change vertical alignment
        index > 3
          ? "cat-card d-flex align-content-center align-items-md-top p-4"
          : "cat-card d-flex align-content-center align-items-md-end p-4"
      }
      style={bgStyle}
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      custom={index}
    >
      {/*Left side text content*/}
      <div className=" ms-2" style={{position:"relative",zIndex:10}}> 
        
          <p className="mb-1">{cat.subtitle}</p>
          <p className="fs-4 fw-semibold mb-1">{cat.title}</p>
          <p className="display-6 fw-bold opacity-25 mb-3">{cat.name}</p>
          <button className="fw-bold btn btn-light btn-md px-4 py-2 rounded-pill z-3">
            Browse
          </button>
        </div>
      
      {/* right side text content */}

      <div className="cat-overlay catt-image" >
        <motion.img
          src={cat.image}
          alt={cat.title}
          className="cat-image img-fluid z-1"
          style={{ x: imgX }}
          drag={false}
          whileHover={{ y: -6, scale: 1.03 }} //hover lift effect
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
        />
      </div>
    </motion.div>
  );
};

export default categorycard;
