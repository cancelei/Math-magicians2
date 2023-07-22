import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const Layout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
