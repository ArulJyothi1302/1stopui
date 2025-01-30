import React, { useState } from "react";
import { BASE_URL, headerLabel, LOGO_URL, NAVBAR } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const [item, setItem] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((store) => store.user.data);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {
        withCredentials: true,
      });

      document.cookie = "token=; Max-Age=0; path=/";
      dispatch(removeUser());
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header className="w-full">
      <div className="bg-sky-950 text-white font-bold text-lg text-center p-2">
        {headerLabel}
      </div>

      <div className="flex flex-wrap items-center justify-evenly px-5 py-3 md:px-10 lg:px-20">
        <Link to="/">
          <img
            className="w-40 md:w-52 cursor-pointer"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>

        <div className="relative w-full max-w-lg md:flex-1 mx-4">
          <input
            type="search"
            className="input w-full p-2 pl-4 pr-10 border focus:outline-none focus:ring-2 focus:ring-cyan-600"
            placeholder="Search for Anything"
          />
          <svg
            className="absolute right-4 top-3 w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </div>
        <div
          className="tooltip tooltip-bottom " // Customize the tooltip width here
          data-tip="Preferred customer program coupon."
        >
          <button className="bg-cyan-900 px-4 py-2 rounded-full flex items-center space-x-2 text-white font-semibold shadow-md hover:bg-green-700 transition sm:flex">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Save Up to 25%</span>
          </button>
        </div>
        <div className="flex justify-center space-x-6 md:space-x-8 lg:space-x-12 w-full md:w-auto mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="border-2 border-blue-900 p-3 rounded-full text-blue-900"
              icon={faQuestion}
            />
            <p className="text-sm mt-1">Support</p>
          </div>

          <div className="relative flex flex-col items-center cursor-pointer group">
            <div className="tooltip tooltip-top" data-tip="Account">
              <FontAwesomeIcon className="text-2xl" icon={faUser} />
            </div>

            <button className="text-sm mt-1">Account</button>

            <div className="absolute top-12 hidden group-hover:block bg-white z-50 shadow-xl rounded-lg w-70 m-4 p-3">
              {!store ? (
                <div className="p-2">
                  <Link to="/login">
                    <button className="bg-orange-700 hover:bg-orange-500 p-3 w-full rounded-lg text-white cursor-pointer">
                      Login / Signup
                    </button>
                  </Link>
                  <p className="hover:underline text-sm text-center mt-2">
                    <Link to="/signup"> Create an account</Link>
                  </p>
                </div>
              ) : (
                <div className="p-2">
                  <Link to="/Account">
                    <button className="bg-orange-700 hover:bg-orange-500 p-3 w-full rounded-lg text-white cursor-pointer">
                      My Account & Order Status
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-orange-700 hover:bg-orange-500 p-3 w-full rounded-lg text-white mt-2 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              className="text-2xl text-blue-900 hover:text-blue-700"
              icon={faHeart}
            />
            <p className="text-sm mt-1">My Favourites</p>
          </div>

          <Link to="/cart">
            <div className="relative flex flex-col items-center cursor-pointer">
              <FontAwesomeIcon className="text-2xl" icon={faCartShopping} />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                {item}
              </span>
              <p className="text-sm mt-1">Your Cart</p>
            </div>
          </Link>

          <div className="navbar-start md:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {NAVBAR.map((list, id) => (
                  <li
                    className="mx-2 p-2 hover:bg-slate-200 hover:p-2"
                    key={id}
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-2 border-blue-300 " />

        <div>
          <nav>
            <div className="navbar bg-base-100">
              <div className="navbar-center w-full flex lg:flex lg:justify-evenly md:justify-center mx-auto">
                <ul className="menu menu-horizontal px-1 hidden md:flex md:justify-evenly">
                  {NAVBAR.map((list) => (
                    <li
                      className="mx-2 text-sm lg:text-lg md:text-md font-bold hover:underline"
                      key={list}
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="lg:hidden sm:block w-full bg-cyan-900 text-center text-white text-md p-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="mx-1">Save Up to 25%</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
