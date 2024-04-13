import { useEffect, useState, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
export default function old_ThirdSectionComp() {
  const [isBigScreen, setIsBigScreen] = useState<boolean | null>(null);
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

    if (window.matchMedia("(min-width: 768px)").matches) {
      setIsBigScreen(true);
    }
  }, []);

  useGSAP(() => {
    if (isBigScreen) {
      const phoneSceneTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-20%",
          end: "10%",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
      phoneSceneTL.to(largePhoneRef.current, { x: "-75px", opacity: 1 }, "<");
      phoneSceneTL.to(smallPhoneRef.current, { x: "70%" }, "<");
      phoneSceneTL.fromTo(
        leftTxtRef.current,
        { x: "250px", opacity: 0 },
        { opacity: 1, x: "-20%" },
        "<"
      );
      phoneSceneTL.fromTo(
        rightTxtRef.current,
        { x: "-250px", opacity: 0 },
        { opacity: 1, x: "20%" },
        "<"
      );
      phoneSceneTL.to(bottomTxtRef.current, { opacity: 1, y: "290px" }, "<");
    } else {
      const phoneSceneTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // start: "-80%",
          start: "-120%",
          end: "0%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
      phoneSceneTL.to(largePhoneRef.current, { x: "-95px", opacity: 1 }, "<");
      phoneSceneTL.to(smallPhoneRef.current, { x: "85%" }, "<");
      phoneSceneTL.to(leftTxtRef.current, { opacity: 1, x: "-120%" }, "<");
      phoneSceneTL.to(rightTxtRef.current, { opacity: 1, x: "140%" }, "<");
      phoneSceneTL.to(bottomTxtRef.current, { opacity: 1, y: "130px" }, "<");
    }
  }, [isBigScreen]);
  //   console.log(isBigScreen);

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
              ref={largePhoneRef}
              src="/images/large-phone.png"
              alt="iphone 13 promax"
            />
            <img
              ref={smallPhoneRef}
              src="/images/small-phone.png"
              alt=" iphone 13"
            />
          </div>
          <p ref={bottomTxtRef}>Super Retina XDR display with ProMotion</p>
        </div>
      </section>
    </>
  );
}
