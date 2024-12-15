import React from 'react';

export default function NavLinks({ onSignUp }) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
      <a href="#gadgets" className="text-gray-600 hover:text-indigo-600">Gadgets</a>
      <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
      <button 
        onClick={onSignUp}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Sign Up
      </button>
    </div>
  );
}