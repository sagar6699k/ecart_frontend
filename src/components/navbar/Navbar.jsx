import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="navbar">
        <div className="left_nav">
          <Link to="/" className="link">
            <li className="logo">SK</li>
          </Link>

          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about/123" className="link">
            <li>About</li>
          </Link>
          <Link to="/dashboard" className="link">
            <li>Dashboard</li>
          </Link>
        </div>
        <div className="right_nav">
          <Link to="/signup" className="link">
            <li>Signup</li>
          </Link>
          <Link to="/login" className="link">
            <li>Login</li>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
