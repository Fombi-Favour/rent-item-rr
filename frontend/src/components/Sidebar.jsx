import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { FaBars, FaTimes } from 'react-icons/fa';
import navMenu from '../utils/nav-menu';
import Logo from '../assets/logo.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white md:h-screen md:border-r-2 md:w-64 lg:w-68">
      <div className="flex flex-col">
        {/* logo */}
        <div className="p-3 flex items-center justify-between">
          <img src={Logo} alt="logo" className="w-20 md:w-48 rounded-xl shadow-md" />
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
          <div className="bg-slate-200 h-screen flex flex-col z-50 pt-10 px-5">
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
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
