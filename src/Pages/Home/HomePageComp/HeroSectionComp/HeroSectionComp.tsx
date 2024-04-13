import { motion as m } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
export default function HeroSectionComp() {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef(null);
  const animation = {
    initial: {
      opacity: 0,
      y: "-100",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1,
        duration: 0.5,
        staggerChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };

  useGSAP(() => {
    gsap.timeline().to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <m.section
      ref={heroRef}
      variants={animation}
      initial="initial"
      animate="animate"
      className="hero"
    >
      <div className="container fixed-width center">
        <div className="content">
          <m.h1 variants={animation}>iPhone 13 Pro</m.h1>
          <m.h2 variants={animation}>The most powerful.</m.h2>

          <m.p variants={animation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex
            obcaecati ipsa laudantium provident.
          </m.p>
        </div>
      </div>
      <video autoPlay src="/images/intro-animation.mov" muted></video>
    </m.section>
  );
}
