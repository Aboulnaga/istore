import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
export default function ThirdSectionComp() {
  const [isBigScreen, setIsBigScreen] = useState<boolean>(true);

  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      setIsBigScreen(window.matchMedia("(min-width: 900px)").matches);
    });
    return () => {
      window.removeEventListener("load", () => {
        setIsBigScreen(window.matchMedia("(min-width: 900px)").matches);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsBigScreen(window.matchMedia("(min-width: 768px)").matches);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsBigScreen(window.matchMedia("(min-width: 768px)").matches);
      });
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const largePhoneRef = useRef(null);
  const smallPhoneRef = useRef(null);
  const leftTxtRef = useRef(null);
  const rightTxtRef = useRef(null);
  const bottomTxtRef = useRef(null);

  useGSAP(() => {
    const smallScreenTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-40%",
        end: "40%",
        scrub: true,
      },
    });

    if (isBigScreen) {
      smallScreenTL.fromTo(
        largePhoneRef.current,
        { left: "calc(50% - 10px)" },
        { left: "calc(50% - 60px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        smallPhoneRef.current,
        { left: "calc(50% + 10px)" },
        { left: "calc(50% + 50px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        leftTxtRef.current,
        { left: "calc(50% - 0px)", opacity: 0 },
        { left: "calc(50% - 220px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        rightTxtRef.current,
        { left: "calc(50% + 0px)", opacity: 0 },
        { left: "calc(50% + 230px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        bottomTxtRef.current,
        { bottom: "calc(50% - 300px)", opacity: 0 },
        { bottom: "calc(50% - 240px)", ease: "power2.out", opacity: 1 },
        "<"
      );
    }

    if (!isBigScreen) {
      smallScreenTL.fromTo(
        largePhoneRef.current,
        { left: "calc(50% - 10px)" },
        { left: "calc(50% - 30px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        smallPhoneRef.current,
        { left: "calc(50% + 10px)" },
        { left: "calc(50% + 30px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        leftTxtRef.current,
        { left: "calc(50% - 0px)", opacity: 0 },
        { left: "calc(50% - 135px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        rightTxtRef.current,
        { left: "calc(50% + 0px)", opacity: 0 },
        { left: "calc(50% + 145px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        bottomTxtRef.current,
        { bottom: "calc(50% - 300px)", opacity: 0 },
        { bottom: "calc(50% - 160px)", ease: "power2.out", opacity: 1 },
        "<"
      );
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
      },
    });
  }, [isBigScreen]);

  return (
    <>
      <section ref={containerRef} className="third-section-comp">
        <div className="container fixed-width center">
          <div className="content">
            <div ref={leftTxtRef} className="left">
              <p>iPhone 13 Pro Max</p>
              <p className="size">6.7"</p>
            </div>
            <div ref={rightTxtRef} className="right">
              <p>Iphone 13 Max</p>
              <p className="size">6.1"</p>
            </div>
          </div>

          <div className="images">
            <img
              className="big"
              ref={largePhoneRef}
              src="/images/large-phone.png"
              alt="iphone 13 promax"
            />
            <img
              className="small"
              ref={smallPhoneRef}
              src="/images/small-phone.png"
              alt=" iphone 13"
            />
          </div>
          <p className="bottom" ref={bottomTxtRef}>
            Super Retina XDR display with ProMotion
          </p>
        </div>
      </section>
    </>
  );
}

/**
 * 

 import { useEffect, useState, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { transform } from "framer-motion";
export default function ThirdSectionComp() {
  const [isBigScreen, setIsBigScreen] = useState<boolean>(false);
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const largePhoneRef = useRef(null);
  const smallPhoneRef = useRef(null);
  const leftTxtRef = useRef(null);
  const rightTxtRef = useRef(null);
  const bottomTxtRef = useRef(null);

  useEffect(() => {
    const bigScreen = window.matchMedia("(min-width: 768px)");
    bigScreen.addEventListener("change", e => {
      setIsBigScreen(e.matches);
      window.location.reload();
    });

    if (window.matchMedia("(width> 768px)").matches) {
      setIsBigScreen(true);
    }
  }, []);

  console.log(isBigScreen);

  useGSAP(() => {
    if (isBigScreen) {
      const smallScreenTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-40%",
          end: "40%",
          scrub: true,
        },
      });

      smallScreenTL.fromTo(
        largePhoneRef.current,
        { left: "calc(50% - 10px)" },
        { left: "calc(50% - 30px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        smallPhoneRef.current,
        { left: "calc(50% + 10px)" },
        { left: "calc(50% + 30px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        leftTxtRef.current,
        { left: "calc(50% - 0px)", opacity: 0 },
        { left: "calc(50% - 135px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        rightTxtRef.current,
        { left: "calc(50% + 0px)", opacity: 0 },
        { left: "calc(50% + 145px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        bottomTxtRef.current,
        { bottom: "calc(50% - 300px)", opacity: 0 },
        { bottom: "calc(50% - 160px)", ease: "power2.out", opacity: 1 },
        "<"
      );

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0%",
          end: "100%",
          pin: true,
          pinSpacing: false,
        },
      });
    }
    // small screen animation
    if (!isBigScreen) {
      const smallScreenTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-40%",
          end: "40%",
          scrub: true,
        },
      });

      smallScreenTL.fromTo(
        largePhoneRef.current,
        { left: "calc(50% - 10px)" },
        { left: "calc(50% - 30px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        smallPhoneRef.current,
        { left: "calc(50% + 10px)" },
        { left: "calc(50% + 30px)", ease: "power2.out" },
        "<"
      );
      smallScreenTL.fromTo(
        leftTxtRef.current,
        { left: "calc(50% - 0px)", opacity: 0 },
        { left: "calc(50% - 135px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        rightTxtRef.current,
        { left: "calc(50% + 0px)", opacity: 0 },
        { left: "calc(50% + 145px)", ease: "power2.out", opacity: 1 },
        "<"
      );
      smallScreenTL.fromTo(
        bottomTxtRef.current,
        { bottom: "calc(50% - 300px)", opacity: 0 },
        { bottom: "calc(50% - 160px)", ease: "power2.out", opacity: 1 },
        "<"
      );

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0%",
          end: "100%",
          pin: true,
          pinSpacing: false,
        },
      });
    }
  }, [isBigScreen]);

  return (
    <>
      <section ref={containerRef} className="third-section-comp">
        <div className="container fixed-width center">
          <div className="content">
            <div ref={leftTxtRef} className="left">
              <p>iPhone 13 Pro Max</p>
              <p className="size">6.7"</p>
            </div>
            <div ref={rightTxtRef} className="right">
              <p>Iphone 13 Max</p>
              <p className="size">6.1"</p>
            </div>
          </div>

          <div className="images">
            <img
              className="big"
              ref={largePhoneRef}
              src="/images/large-phone.png"
              alt="iphone 13 promax"
            />
            <img
              className="small"
              ref={smallPhoneRef}
              src="/images/small-phone.png"
              alt=" iphone 13"
            />
          </div>
          <p className="bottom" ref={bottomTxtRef}>
            Super Retina XDR display with ProMotion
          </p>
        </div>
      </section>
    </>
  );
}


 */
