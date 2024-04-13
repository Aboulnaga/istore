import { motion as m, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
export default function SecondSectionComp() {
  const textContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "start start"],
  });

  const span1 = useTransform(scrollYProgress, [0, 0.16], [1, 0.3]);
  const span2 = useTransform(scrollYProgress, [0.16, 0.32], [1, 0.3]);
  const span3 = useTransform(scrollYProgress, [0.32, 0.48], [1, 0.3]);
  const span4 = useTransform(scrollYProgress, [0.48, 0.64], [1, 0.3]);
  const span5 = useTransform(scrollYProgress, [0.64, 0.8], [1, 0.3]);
  const span6 = useTransform(scrollYProgress, [0.8, 1], [1, 0.3]);

  return (
    <section className="second-page-comp">
      <video src="/images/smoke-video.mp4" autoPlay loop muted></video>
      <div className="container  fixed-width center">
        <m.p
          transition={{
            staggerChildren: 0.5,
            delayChildren: 1,
          }}
          ref={textContainerRef}
          className="content"
        >
          <m.span style={{ opacity: span1 }} className="highlight">
            A dramatically more powerful camera system.
          </m.span>{" "}
          <m.span style={{ opacity: span2 }} className="highlight">
            A display so responsive, every interaction feels new again.
          </m.span>{" "}
          <m.span style={{ opacity: span3 }} className="highlight">
            The world's fastest smartphone chip.
          </m.span>
          <m.span style={{ opacity: span4 }} className="highlight">
            Exceptional durability.
          </m.span>
          <m.span style={{ opacity: span5 }} className="highlight">
            And a huge leap in battery life.
          </m.span>
          <br />
          <br />
          <m.span style={{ opacity: span6 }} className="highlight">
            Let's pro
          </m.span>
        </m.p>
      </div>
    </section>
  );
}
