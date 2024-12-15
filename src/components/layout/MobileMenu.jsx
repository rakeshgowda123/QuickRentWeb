import React from 'react';

export default function MobileMenu({ onSignUp }) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
        <a href="#gadgets" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Gadgets</a>
        <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
        <button 
          onClick={onSignUp}
          className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}