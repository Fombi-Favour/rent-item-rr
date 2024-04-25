import React from 'react';
import { Outlet } from 'react-router';
import DashNavbar from './DashNavbar';

const Layout = () => (
  <div className="md:flex">
    <DashNavbar />
    <div className="w-10/12">
      <Outlet />
    </div>
  </div>
);

export default Layout;
