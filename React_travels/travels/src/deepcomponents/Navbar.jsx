


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone } from 'react-icons/fa6';
import logo from '../assets/logo.png';


const Navbar = ({ token, handleLogout }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/bus', label: 'Bus' },
    { href: '/services', label: 'Services' },
    ...(token ? [{ href: '/my-bookings', label: 'My Bookings' }] : []),
  ];

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const logout = () => {
    handleLogout();
    navigate('/login');
    handleClose(); 
  };

  return (
    <div className="w-full h-[8ch] bg-white flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50 shadow-md">
      <Link to="/" className="mr-16">
        <img src={logo} alt="logo" className="w-28 h-auto object-contain" />
      </Link>

      <button
        onClick={handleClick}
        className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 flex items-center justify-end"
      >
        {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      <div
        className={`${
          open
            ? 'flex absolute top-14 left-0 w-full md:relative bg-white dark:bg-neutral-900 shadow-md md:shadow-none rounded-md'
            : 'hidden'
        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between`}
      >
        <ul className="list-none flex md:items-center items-start gap-x-5 gap-y-1 flex-wrap md:flex-row flex-col text-base text-neutral-600 dark:text-neutral-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                onClick={handleClose}
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:items-center items-start gap-x-5 gap-y-2 flex-wrap md:flex-row flex-col text-base font-medium text-neutral-800 dark:text-neutral-200">
          
          <div className="relative bg-violet-600 rounded-md px-8 py-2 w-fit cursor-pointer">
            <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-violet-600 border-4 border-white dark:border-neutral-900 flex items-center justify-center">
              <FaPhone className="text-white text-sm" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-neutral-200 font-light">Need Help?</p>
              <p className="text-xs font-normal text-white tracking-wide">+91 1234567890</p>
            </div>
          </div>

        

     
          {token ? (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/register"
                onClick={handleClose}
                className="px-4 py-2 rounded-md text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={handleClose}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
