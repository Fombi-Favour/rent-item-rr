import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

const Layout = () => (
  <div className="md:flex">
    <div className="">
      <Sidebar />
    </div>
    <div className="w-10/12">
      <Outlet />
    </div>
  </div>
);

export default Layout;
