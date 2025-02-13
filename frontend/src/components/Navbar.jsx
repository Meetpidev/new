import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserInitial(name.charAt(0).toUpperCase());
    }
  }, []);

  const handleUserInitialClick = () => {
    if (userInitial) {
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    console.log("Logout");
    localStorage.clear();
    setUserInitial(''); // Clear user initial state
    navigate('/login'); // Redirect to login page
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/add-doctor', label: 'Add Doctor' },
    { path: '/contact', label: 'Contact' },
    // Only show Signup if userInitial is not present
    {
      path: userInitial ? null : '/signup',
      label: userInitial ? null : 'Signup',
      onClick: null,
    },
  ];

  // Dropdown options
  const dropdownOptions = [
    { path: '/dashboard', label: 'Your Profile' },
    { path: '/fitness', label: 'Your Fitness' },
    { path: '/settings', label: 'Settings' },
    { 
      label: 'Logout', 
      onClick: handleLogout 
    },
  ];

  return (
    <nav className="bg-indigo-600 text-white top-0 z-50 fixed w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <span className="font-bold text-xl">Vitality AI</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              item.label && (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link 
                    to={item.path} 
                    className="hover:text-indigo-200 transition-colors"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* User Initial with Dropdown */}
          {userInitial && (
            <div className="relative text-left">
              <div>
                <button
                  type="button"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
                >
                  {userInitial}
                </button>
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {dropdownOptions.map((option) => (
                      <Link
                        key={option.path}
                        to={option.path}
                        onClick={option.onClick}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                item.label && (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="hover:text-indigo-200 transition-colors px-3 py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
