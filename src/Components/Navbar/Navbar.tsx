import { Link } from "react-router-dom";
export default function Navbar({ navClasses }: { navClasses?: string[] }) {
  return (
    <nav onClick={e => e.stopPropagation()} className={navClasses?.join(" ")}>
      <ul>
        <li>
          <Link to="#">Overview</Link>
        </li>
        <li>
          <Link to="#">Switching to iPhone</Link>
        </li>
        <li>
          <Link to="#">Tech Specs</Link>
        </li>
        <li>
          <button>Buy</button>
        </li>
      </ul>
    </nav>
  );
}
