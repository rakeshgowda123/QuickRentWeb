import React from 'react';

export default function HeroImages() {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full grid grid-cols-2 gap-4 p-4">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Professional camera equipment"
        />
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          alt="Modern laptop"
        />
      </div>
    </div>
  );
}