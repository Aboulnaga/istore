import { useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function FifthSectionComp() {
  gsap.registerPlugin(ScrollTrigger);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const leftTopText = useRef(null);
  const leftBottomText = useRef(null);
  const rightTopText = useRef(null);
  const rightBottomText = useRef(null);

  useGSAP(() => {
    const videoSceneTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "0%",
        end: "150%",
        scrub: true,
        pin: true,
      },
    });

    videoSceneTL.fromTo(
      videoRef.current,
      { currentTime: 0.1 },
      { currentTime: 3, duration: 1, ease: "ease" }
    );

    videoSceneTL.fromTo(
      leftTopText.current,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 0.1 },
      "<"
    );
    videoSceneTL.fromTo(
      leftBottomText.current,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 0.5, delay: 0.5 },
      "<"
    );
    videoSceneTL.fromTo(
      rightTopText.current,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 0.5, delay: 0.5 },
      "<"
    );
    videoSceneTL.fromTo(
      rightBottomText.current,
      { opacity: 0 },
      { opacity: 1, ease: "power2.out", duration: 0.5, delay: 0.5 },
      "<"
    );
  }, []);
  return (
    <section ref={sectionRef} className="fifth-section-comp">
      <div className="container center ">
        <video
          ref={videoRef}
          className="video"
          src="/images/output-2.mp4"
          muted
        ></video>
        <div className="info">
          <div className="left">
            <p ref={leftTopText}>
              up to <br />
              <span> 25% brighter outdoors</span>
              <br />
              for content that looks even more vivid in sunlight
            </p>
            <p ref={leftBottomText}>
              <span>Even more display area</span>
              <br />
              thanks to smaller camera system.
            </p>
          </div>
          <div className="right">
            <p ref={rightTopText}>
              <span>Custom OLED technology</span>
              pushes the display's incredible resolution and color right to the
              edge
            </p>
            <p ref={rightBottomText}>
              up to <span>1200 nits</span> peak brightness for your HDR photos
              and videos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
