import { useState } from "react";
import { sliderImgs, btnsIMGS, bigImgs } from "./DB";
import { motion as m } from "framer-motion";
export default function FourthSectionComp() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderAnim = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: {
        duration: 0.7,
      },
    },
  };

  const mapImgs = sliderImgs.map((img, index) => {
    return (
      <m.div
        variants={sliderAnim}
        initial="hidden"
        animate="visible"
        key={index}
        // className={index === currentIndex ? "active phone" : "phone"}
        className="phone"
      >
        <m.img src={img} alt="" />
      </m.div>
    );
  });

  const mapBtns = btnsIMGS.map((btn, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={index === 0 ? "active" : ""}
    >
      <img src={btn} alt="" />
    </button>
  ));

  return (
    <section className="forth-section-comp">
      <div className="container center">
        {/* slider start */}
        <div className="col1">
          <div className="gallery">{mapImgs}</div>

          <div className="btns">
            <div className="btns-container">{mapBtns}</div>
            <p>
              <span>Sierra Blue</span>, <span>Silver</span>, <span>Gold</span>,{" "}
              <span>Graphite.</span>
            </p>
          </div>
        </div>
        {/* slider end */}

        {/* right col start */}
        <div className="col2">
          {
            <m.img
              key={currentIndex}
              variants={{
                hidden: {
                  opacity: 0.7,
                  scale: 0.9,
                  transformOrigin: "bottom center",
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              src={bigImgs[currentIndex]}
              loading="lazy"
            />
          }
        </div>
        {/* right col end */}
      </div>
    </section>
  );
}
