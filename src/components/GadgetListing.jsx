import React from "react";
import { Check, Upload } from "lucide-react";

const gadgets = [
  {
    name: "Laptops",
    price: "1999RS/Day",
    features: [
      "MacBook Pro",
      "Dell XPS",
      "ThinkPad X1",
      "Gaming Laptops",
      "Free Delivery",
      "24/7 Support",
    ],
  },
  {
    name: "Cameras",
    price: "999RS/Day",
    features: [
      "Sony Alpha",
      "Canon EOS",
      "Nikon Z",
      "Lens Kit Included",
      "Memory Cards",
      "Tripod Available",
    ],
  },
  {
    name: "Gaming",
    price: "500RS/Day",
    features: [
      "PS5",
      "Xbox Series X",
      "Nintendo Switch",
      "Extra Controllers",
      "Popular Games",
      "Same Day Setup",
    ],
  },
];

export default function GadgetListing() {
  return (
    <div id="gadgets" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Gadgets
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our wide selection of premium gadgets available for rent
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8  gadgetbox">
          {gadgets.map((gadget) => (
            <div
              key={gadget.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {gadget.name}
                </h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {gadget.price}
                  </span>
                </p>
                <ul className="mt-6 space-y-6">
                  {gadget.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-indigo-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 block w-full bg-indigo-600 py-3 px-6 border border-transparent rounded-md text-center font-medium text-white hover:bg-indigo-700">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Upload className="mr-2 h-5 w-5" />
            List Your Gadget
          </button>
        </div>
      </div>
    </div>
  );
}
