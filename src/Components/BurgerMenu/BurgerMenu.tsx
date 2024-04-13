import Navbar from "../Navbar/Navbar";
import { useAppContext } from "../../Provider/ContextProvider";
import { delay, motion as m, transform } from "framer-motion";
export default function BurgerMenu() {
  const {
    state: { isBurgerMenuOpen },
    dispatch,
  } = useAppContext();

  const backGroundAnimation = {
    opened: {
      opacity: 1,
      zIndex: 1100,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      zIndex: -1,
      transition: {
        duration: 0.5,
        zIndex: {
          delay: 0.5,
        },
      },
    },
  };

  const navAnimation = {
    opened: {
      transform: "translateX(0)",
      opacity: 1,
      zIndex: 1100,
      transition: { duration: 0.4 },
    },
    closed: {
      opacity: 1,
      transform: "translateX(-120%)",
      zIndex: 1100,
      transition: { duration: 0.4 },
    },
  };
  return (
    <m.section
      onClick={() => dispatch({ isBurgerMenuOpen: false })}
      className="burger-menu-comp"
      variants={backGroundAnimation}
      initial="closed"
      animate={isBurgerMenuOpen ? "opened" : "closed"}
    >
      <m.div
        variants={navAnimation}
        initial="closed"
        animate={isBurgerMenuOpen ? "opened" : "closed"}
        className="burger-menu-nav-animation"
      >
        <Navbar navClasses={["burger-menu-nav"]} />
      </m.div>
    </m.section>
  );
}
