import { useLayoutEffect, useState, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
export default function LastSectionComp() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const rightImgRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState<"small" | "medium" | "large">(
    "small"
  );

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setScreenWidth("small");
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1000) {
        setScreenWidth("medium");
      } else if (window.innerWidth > 1000) {
        setScreenWidth("large");
      }
    });
    if (window.innerWidth < 768) {
      setScreenWidth("small");
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      setScreenWidth("medium");
    } else if (window.innerWidth >= 992) {
      setScreenWidth("large");
    }

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setScreenWidth("small");
        } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
          setScreenWidth("medium");
        } else if (window.innerWidth >= 992) {
          setScreenWidth("large");
        }
      });
    };
  }, []);

  useGSAP(() => {
    if (screenWidth === "small") {
      const lastSectionTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: " 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      lastSectionTL.fromTo(
        contentRef.current,
        { y: "-450px" },
        { y: "0px", ease: "power2.out" }
      );
      lastSectionTL.fromTo(
        videoRef.current,
        { y: "450px" },
        { y: "-50px", ease: "power2.out" },
        "<"
      );
    }
  }, [screenWidth]);
  useGSAP(() => {
    if (screenWidth === "medium") {
      const lastSectionTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: " 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      lastSectionTL.fromTo(
        contentRef.current,
        { y: "-450px" },
        { y: "0px", ease: "power2.out" }
      );

      lastSectionTL.fromTo(
        videoRef.current,
        { y: "450px" },
        { y: "-50px", ease: "power2.out" },
        "<"
      );
    }
  }, [screenWidth]);
  useGSAP(() => {
    if (screenWidth === "large") {
      const lastSectionTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: " 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      lastSectionTL.fromTo(
        contentRef.current,
        { y: "-450px" },
        { y: "0px", ease: "power2.out" }
      );

      lastSectionTL.fromTo(
        videoRef.current,
        { y: "450px" },
        { y: "-50px", ease: "power2.out" },
        "<"
      );
    }
  }, [screenWidth]);

  //   console.log(screenWidth);
  return (
    <section ref={containerRef} className="last-section-comp">
      <div className="container">
        <div ref={contentRef} className="content">
          <h3 className="title">
            Customize <br /> your camera to
          </h3>
          <h4 className="subtitle">lock in your look.</h4>
        </div>
        <div ref={videoRef} className="video">
          <img src="/images/iphone-frame.png" alt="" />
          <video
            src="/images/iphone-camera-video.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="portrait-container">
          <img
            ref={rightImgRef}
            src="/images/portrait.jpg"
            className="portrait"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
