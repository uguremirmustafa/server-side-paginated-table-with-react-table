import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen">
      <Navbar />
      <main className="max-w-4xl w-full mx-auto pt-16">{children}</main>
    </div>
  );
}

export default Layout;
