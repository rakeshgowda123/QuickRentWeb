import React from 'react';

export default function FeatureCard({ name, description, icon: Icon }) {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{name}</p>
      <p className="mt-2 ml-16 text-base text-gray-500">{description}</p>
    </div>
  );
}