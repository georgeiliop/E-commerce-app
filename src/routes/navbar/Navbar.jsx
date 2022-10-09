import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navbar.scss";
import Menu from "./menu/Menu";
import CardIcon from "../../components/card-icon/CardIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Navbar = ({ showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
              {currentUser ? (
                <Link
                  className="nav--link"
                  to="/authentication"
                  onClick={signOutUser}
                >
                  Sign Out
                </Link>
              ) : (
                <Link className="nav--link" to="/authentication">
                  Sign In
                </Link>
              )}
              <CardIcon />
            </div>

            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

      <Outlet />
    </Fragment>
  );
};

export default Navbar;
