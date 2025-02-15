import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <span className="font-bold text-xl">Vitality AI</span>
            </div>
            <p className="mt-2 text-gray-400">Empowering your wellness journey with AI</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@vitalityai.com</li>
              <li>27, Navjyot Park, 150 Feet Ring Rd</li>
              <li>Rajkot, Gujarat(India)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vitality AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;