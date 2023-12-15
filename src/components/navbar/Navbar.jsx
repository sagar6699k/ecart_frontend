import { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const username = localStorage.getItem("username");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setDropdownOpen(false);
    navigate("/");
  };
  return (
    <>
      <ul className="navbar">
        <div className="left_nav">
          <Link to="/" className="link">
            <li className="logo flex items-center">
              SK <span className="text-4xl">mart</span>
            </li>
          </Link>

          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/dashboard" className="link">
            <li>Dashboard</li>
          </Link>
        </div>
        <div className="right_nav w-2/3 flex justify-between">
          {/* searchbar */}

          <div className="relative w-1/2 flex flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-100 focus:shadow-white focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            {/* <!--Search icon--> */}
            <span
              className="cursor-pointer input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-100 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          {/* searchbar */}

          <div className="flex gap-4">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {!username ? (
              <Link to="/signup" className="link">
                <li>Signup</li>
              </Link>
            ) : null}

            <div className="relative">
              {!username ? (
                <Link to="/login" className="link">
                  <li>Login</li>
                </Link>
              ) : (
                <div className="relative inline-block">
                  <div
                    className="flex gap-2"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                  >
                    <button className="text-lg text-gray-50 focus:outline-none">
                      {username}
                    </button>
                    <img
                      className="h-8 w-8 rounded-full cursor-pointer"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-4 bg-white border rounded shadow-md">
                      <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Profile
                      </button>
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
          </div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
