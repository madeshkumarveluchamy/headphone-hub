import React from "react";
import "./hero-slider.css";
import { heroSlider } from "../../../constants/data";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { AnimatePresence, motion, scale, transform } from "framer-motion";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  //text animation

  const textVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  //image animation

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1 },
    },
    exit: { opacity: 0, scale: 0.95, filter: "blur(6px)" },
  };

  return (
    <>
      <section className="hero-carousel-wrapper">
        {/* background crossfade */}
        {heroSlider.map((s, i) => (
          <motion.div
            key={s.id}
            className="bg-layer"
            inital={{ opacity: 0 }}
            animate={{ opacity: activeIndex === i ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            style={{ background: s.bg }}
          />
        ))}

        <Carousel
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          interval={4000}
          controls={false}
          indicators
          fade
          pause="hover"
        >
          {heroSlider.map((s, i) => (
            <Carousel.Item key={s.id}>
              <div className="container">
                <div className="row">
                  <div className="row align-items-center slider-show">
                    {/* text column */}

                    <div className="col-md-6 col-12 order-md-1 order-2 mt-3">
                      <motion.div
                        variants={textVariant}
                        delay={0.12}
                        duration={1.2}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                        variants={textVariant}
                        exit="exit"
                        animate="visible"
                        initial="hidden"
                      >
                          <h2 className="hero-title text-white mb-3 fw-bold">
                            {s.title}
                          </h2>
                          <p className="text-white mb-2">{s.desc}</p>
                          <h3 className="hero-title text-white fw-bold">
                            {s.price}
                          </h3>
                          <button className="btn btn-light btn-sm me-2 mt-2 fw-bold">
                            Shop Now <i className="bi bi-arrow-right ms-1"></i>
                          </button>
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* image column */}
                    <div className="col-md-6 col-12 order-md-2 order-1">
                      <div className="d-flex align-items-center justify-content-center ">
                        <AnimatePresence mode="wait" initial={false}>
                          {activeIndex == i && (
                            <motion.img
                              src={s.image}
                              alt={s.title}
                              className="hero-image"
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={imageVariants}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default HeroSlider;
