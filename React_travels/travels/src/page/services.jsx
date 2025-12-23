import React from 'react';
import { FaBus, FaCreditCard, FaClock, FaMapMarkedAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaBus className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'Comfortable Buses',
    description: 'Enjoy clean, air-conditioned buses with spacious seating to make your travel pleasant.',
  },
  {
    icon: <FaCreditCard className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'Secure Payments',
    description: 'Multiple payment methods supported with end-to-end encryption for safe transactions.',
  },
  {
    icon: <FaClock className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'On-Time Departures',
    description: 'Reliable departure and arrival times to help you plan your day without delays.',
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'Wide Coverage',
    description: 'Book tickets across major cities and rural routes with our growing operator network.',
  },
];

const Service = () => (
  <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pt-24 pb-16 space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
        Our Services
      </h2>
      <p className="max-w-2xl mx-auto text-base text-neutral-600 dark:text-neutral-400">
        We provide a seamless travel experience from booking to boarding. Explore what we offer:
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-md shadow-sm hover:shadow-lg hover:bg-white dark:hover:bg-neutral-800 transition duration-300 group cursor-pointer"
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="bg-violet-100 dark:bg-violet-900/30 p-4 rounded-full group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
            {service.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Service;
