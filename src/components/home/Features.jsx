import React from "react";
import { Package, Clock, Truck, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    name: "Wide Variety of Gadgets",
    description:
      "Choose from our extensive collection of latest tech gadgets including laptops, cameras, gaming consoles, and more.",
    icon: Package,
  },
  {
    name: "Quick Delivery",
    description:
      "Get your rented gadgets delivered to your doorstep within 24 hours of confirmation.",
    icon: Truck,
  },
  {
    name: "Flexible Duration",
    description:
      "Rent for a day, week, or month. Extend or return early based on your needs.",
    icon: Clock,
  },
  {
    name: "Damage Protection",
    description:
      "All rentals come with complimentary damage protection for peace of mind.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose QuickRent?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Welcome to QuickRent, your trusted platform for renting the latest
            gadgets at unbeatable prices. We believe that technology should be
            accessible to everyone, whether you're a student, a professional, or
            a tech enthusiast. With QuickRent, you can explore a wide range of
            gadgets like laptops, cameras, gaming consoles, and more without the
            need for long-term commitments. Our mission is to provide
            hassle-free and affor Experience hassle-free gadget rentals with our
            premium services and features.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.name} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
