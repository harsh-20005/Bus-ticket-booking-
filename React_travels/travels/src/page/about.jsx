import React from 'react';
import { FaGlobe, FaHeadset, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

const aboutPoints = [
  {
    icon: <FaGlobe className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'Expansive Network',
    description: 'We connect cities and towns across the country, making travel accessible for everyone.',
  },
  {
    icon: <FaHeadset className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is here to assist you with booking, cancellations, and more.',
  },
  {
    icon: <FaShieldAlt className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'Trusted & Secure',
    description: 'We use top-tier security measures to protect your data and payment information.',
  },
  {
    icon: <FaUserFriends className="text-3xl text-violet-600 dark:text-violet-400" />,
    title: 'Customer-Centric',
    description: 'Your comfort and satisfaction are our top priorities. We listen, improve, and deliver.',
  },
];

const About = () => (
  <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pt-24 pb-16 space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
        About Us
      </h2>
      <p className="max-w-2xl mx-auto text-base text-neutral-600 dark:text-neutral-400">
        We are a technology-driven platform simplifying intercity bus travel for millions. Our goal is
        to offer a seamless, affordable, and safe booking experience to travelers everywhere.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {aboutPoints.map((item, index) => (
        <div
          key={index}
          className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-md shadow-sm hover:shadow-lg hover:bg-white dark:hover:bg-neutral-800 transition duration-300 group cursor-pointer"
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="bg-violet-100 dark:bg-violet-900/30 p-4 rounded-full group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default About;
