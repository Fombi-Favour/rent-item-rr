import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import navMenu from '../utils/nav-menu';
import Logo from '../assets/logo.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-bg md:h-screen md:border-r-2 md:w-64 lg:w-68">
      <div className="flex flex-col shadow-lg md:shadow-none">
        {/* logo */}
        <div className="p-3 flex md:flex-col items-center justify-between">
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-16 md:w-40 rounded-xl shadow-md" />
          </NavLink>
          <div className="flex items-center gap-2 md:mt-7 md:-mb-9 shadow-sm shadow-black/20 p-1 rounded-lg">
            <FaUser className="text-4xl text-white bg-orange-400 border-2 rounded-full border-transparent p-1" />
            <span className="font-semibold tracking-wide">username</span>
          </div>
          <FaBars
            onClick={() => setIsOpen(true)}
            className="text-2xl md:hidden"
          />
        </div>
        {/* desktop nav menu */}
        <div className="hidden md:flex flex-col mt-10 ml-4 gap-3">
          {navMenu.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              end
              className={({ isActive }) => `text-gray-800 p-1 text-lg uppercase transition-all duration-200 font-semibold no-underline${isActive ? 'trans bg-orange-400 text-white rounded-l-lg text-right px-3 delay-150' : ''}`}
            >
              {menu.name}
            </NavLink>
          ))}
          {/* logout button */}
          <button
            type="button"
            className="bg-red-500 w-fit px-8 rounded-lg flex items-center gap-1 text-white"
          >
            <MdExitToApp size={20} />
            <span className="uppercase font-semibold text-lg tracking-wider">
              logout
            </span>
          </button>
          {/* footer */}
          <footer className="flex items-center absolute bottom-6 md:ml-1 lg:ml-3">
            <span className="md:text-[11px] lg:text-[12px]">
              HoliStay 2024. All rights reserved
            </span>
          </footer>
        </div>

        {/* mobile nav menu */}
        <div className={clsx(' fixed h-full w-screen lg:hidden z-50 bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all duration-700',
          isOpen && 'delay-200 translate-x-0')}
        >
          <div className="main-bg h-screen flex flex-col z-50 pt-10 px-5">
            <div className="flex justify-end pb-5">
              <FaTimes onClick={() => setIsOpen(false)} className="text-3xl" />
            </div>
            {navMenu.map((menu) => (
              <NavLink
                key={menu.id}
                to={menu.path}
                onClick={() => setIsOpen(false)}
                end
                className={({ isActive }) => `text-gray-800 p-1 text-lg uppercase transition-all duration-200 font-semibold no-underline${isActive ? 'trans bg-orange-400 text-white rounded-l-lg text-right px-3 delay-150' : ''}`}
              >
                {menu.name}
              </NavLink>
            ))}
            <button
              type="button"
              className="bg-red-500 w-fit mt-2 ml-6 px-8 rounded-lg text-white flex items-center gap-1"
            >
              <MdExitToApp size={20} />
              <span className="uppercase font-semibold text-lg tracking-wider">
                logout
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
