import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const username = localStorage.getItem("username");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate('/')
  };
  return (
    <>
      <ul className="navbar">
        <div className="left_nav">
          <Link to="/" className="link">
            <li className="logo">
              SK <span>mart</span>
            </li>
          </Link>

          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/dashboard" className="link">
            <li>Dashboard</li>
          </Link>
        </div>
        <div className="right_nav">
          {!username ? (
            <Link to="/signup" className="link">
              <li>Signup</li>
            </Link>
          ) : null}
          {/* {!username ? (
            <Link to="/login" className="link">
              <li>Login</li>
            </Link>
          ) : (
            <button className="text-lg text-gray-50">{username}</button>
          )} */}

          <div className="relative">
            {!username ? (
              <Link to="/login" className="link">
                <li>Login</li>
              </Link>
            ) : (
              <div className="relative inline-block">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="text-lg text-gray-50 focus:outline-none"
                >
                  {username}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* <Link to="/signup" className="link">
            <li>Signup</li>
          </Link> */}
          {/* <Link to="/login" className="link">
            <li>{username ? username : "Login"}</li>
          </Link> */}
        </div>
      </ul>
    </>
  );
};

export default Navbar;
