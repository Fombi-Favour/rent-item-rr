// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between pt-3 px-3">
      <Link to="/" className="flex gap-2 items-center">
        <img src={Logo} alt="logo" className="w-[4.15rem] md:w-12 rounded-2xl" />
        <p className="text-lg font-semibold tracking-wide hidden md:block">HoliStay</p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link to="login" className="uppercase tracking-wide text-[18px] font-medium">
            sign in
          </Link>
          <Link
            to="sign-up"
            className="uppercase tracking-wide text-[18px] font-medium bg-slate-400/50 px-3 rounded-lg"
          >
            sign up
          </Link>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          {!toggleDropdown ? (
            <FaBars onClick={() => setToggleDropdown((prev) => !prev)} />
          ) : (
            <FaTimes onClick={() => setToggleDropdown((prev) => !prev)} />
          )}

          {toggleDropdown && (
            <div className="absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Link
                to="login"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Sign In
              </Link>

              <Link
                to="sign-up"
                className="block px-4 py-2 text-sm bg-slate-700/50 mx-2 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
