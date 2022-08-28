import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={showMenu ? "menu active" : "menu"}>
      <ul>
        <li onClick={() => setShowMenu(false)}>
          <Link className="nav--link" to="/shop">
            Sign in
          </Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link className="nav--link" to="/shop">
            Shop
          </Link>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <Link className="nav--link" to="/shop">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
