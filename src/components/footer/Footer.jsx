import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="links--container">
            <Link className="nav--link" to="/shop">
              Sign in
            </Link>
            <Link className="nav--link" to="/shop">
              Connect
            </Link>
            <Link className="nav--link" to="/shop">
              Shop
            </Link>
          </div>
          <p>@YAY24 &nbsp;, &nbsp; 2022</p>
        </div>
        <div className="right">links</div>
      </div>
    </div>
  );
};

export default Footer;
