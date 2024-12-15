import React from "react";
import { Menu, X, Laptop } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 navbar border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Laptop className="h-9 w-9 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              QuickRent
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-12 others">
            <a
              href="#features"
              className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Features
            </a>
            <a
              href="#gadgets"
              className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Gadgets
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Contact
            </a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
            <a
              href="#features"
              className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Features
            </a>
            <a
              href="#gadgets"
              className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Gadgets
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              Contact
            </a>
            <button className="w-full text-left px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
