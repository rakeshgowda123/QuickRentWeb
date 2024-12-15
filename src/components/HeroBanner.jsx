import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex items-center justify-between">
            <div className="sm:text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Rent the Latest</span>
                <span className="block text-indigo-600">
                  Tech Gadgets Today
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Access premium gadgets without the premium price tag. From
                laptops to cameras, gaming consoles to drones - rent what you
                need, when you need it.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#gadgets"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Rentals
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-end p-4">
              <div className="w-full h-full grid grid-cols-2 gap-4">
                <img
                  className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                  alt="Modern laptop"
                />
                <img
                  className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Professional camera equipment"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
