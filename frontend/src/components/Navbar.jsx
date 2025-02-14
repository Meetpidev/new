import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, X, User, Dumbbell, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserInitial(name.charAt(0).toUpperCase());
    }
  }, []);

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
    {
      path: userInitial ? null : '/signup',
      label: userInitial ? null : 'Signup',
      onClick: null,
    },
  ];

  // Dropdown options
  const dropdownOptions = [
    { path: '/dashboard', label: 'Profile', icon: <User className="mr-2" /> },
    { path: '/fitness', label: 'Fitness', icon: <Dumbbell className="mr-2" /> },
    { path: '/settings', label: 'Settings', icon: <Settings className="mr-2" /> },
    {
      label: 'Logout',
      onClick: handleLogout,
      icon: <LogOut className="mr-2" />,
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
            <PopupState variant="popover" popupId="user-menu-popup">
              {(popupState) => (
                <>
                  <Button variant="contained" {...bindTrigger(popupState)} className="bg-indigo-600 text-white">
                    {userInitial}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
  {dropdownOptions.map((option) => (
    <MenuItem key={option.path} onClick={() => {
      if (option.onClick) {
        option.onClick(); // Call the logout function if it exists
      }
      popupState.close(); // Close the dropdown menu
    }}>
      {/* Render icon and label */}
      <div className="flex items-center">
        {option.icon}
        {option.path ? (
          <Link to={option.path} className="text-gray-700 hover:bg-indigo-100 w-full block text-left">
            {option.label}
          </Link>
        ) : (
          <span>{option.label}</span>
        )}
      </div>
    </MenuItem>
  ))}
</Menu>
                </>
              )}
            </PopupState>
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
