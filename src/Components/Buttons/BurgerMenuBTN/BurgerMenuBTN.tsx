import { buergerMenuSvg } from "../../SVG/svgImgs";
import { useAppContext } from "../../../Provider/ContextProvider";
export default function BurgerMenuBTN({
  width = "16px",
  height = "24px",
  fill = "black",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  const { state, dispatch } = useAppContext();
  // console.log(state.isBurgerMenuOpen);
  return (
    <>
      <div
        onClick={() => dispatch({ isBurgerMenuOpen: !state.isBurgerMenuOpen })}
        style={{ fill, width, height }}
        className="burger-menu-btn-comp"
      >
        {buergerMenuSvg}
      </div>
    </>
  );
}
