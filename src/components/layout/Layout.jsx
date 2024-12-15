import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}