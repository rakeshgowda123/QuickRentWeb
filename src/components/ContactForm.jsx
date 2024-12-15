import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => (
  <div id="contact" className="bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-indigo-600" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-500">Mon-Fri 9am to 6pm</p>
              <p className="mt-2 text-indigo-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-indigo-600" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-500">24/7 Support</p>
              <p className="mt-2 text-indigo-600">support@quickrent.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Office</h3>
              <p className="mt-2 text-gray-500">Visit our store</p>
              <p className="mt-2 text-indigo-600">
                123 Tech Street, SF Bengaluru
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;
