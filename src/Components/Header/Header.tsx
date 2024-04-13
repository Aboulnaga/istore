import { Link } from "react-router-dom";
import BurgerMenuBTN from "../Buttons/BurgerMenuBTN/BurgerMenuBTN";
import Navbar from "../Navbar/Navbar";
import { logoSvg } from "../SVG/svgImgs";
export default function Header() {
  return (
    <>
      <header>
        <div className="container fixed-width center">
          <div className="logo">
            <h1>
              <Link to="/">{logoSvg} iStore</Link>
            </h1>
          </div>

          <Navbar />

          <div className="menu">
            <BurgerMenuBTN />
          </div>
        </div>
      </header>
    </>
  );
}
