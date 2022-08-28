import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navbar.scss";
import Menu from "./menu/Menu";

const Navbar = ({ showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <Fragment>
      <div className={showMenu ? "navbar active" : "navbar notActive"}>
        <div className="wrapper">
          <div className="left">
            <div className="burgerMenu" onClick={handleClick}>
              <span className="Line1"></span>
              <span className="Line2"></span>
              <span className="Line2"></span>
            </div>
            <div className="links--container">
              <div className="nav--link" onClick={handleClick}>
                Shop
              </div>
            </div>
          </div>
          <div className="middle">
            <Link className="logo--link" to="/">
              <div className="logo">Yay24</div>
            </Link>
          </div>
          <div className="right">
            <div className="links--container">
              <Link className="nav--link" to="/shop">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      <Outlet />
    </Fragment>
  );
};

export default Navbar;
