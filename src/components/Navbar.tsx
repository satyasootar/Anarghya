import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px] items-center">
          {/* Logo with red accent and sizing */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Anarghya Logo"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform"
              />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Anarghya 2025
              </span>
            </a>
          </div>
          
          {/* Desktop Menu with red accents */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#schedule" className="text-gray-700 hover:text-red-600 transition-colors font-medium relative group">
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#venue" className="text-gray-700 hover:text-red-600 transition-colors font-medium relative group">
              Venue
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdVC9NmY7koypjx-3yyLHMS6sVWMHeNW4bzBlOVdtOP-BsOOA/viewform"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-red-200"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with red accents */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 py-4 px-4">
              <a href="#schedule" onClick={()=>setIsOpen(false)} className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Schedule</a>
              <a href="#venue" onClick={()=>setIsOpen(false)} className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Venue</a>
              <a href="#contact" onClick={()=>setIsOpen(false)} className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Contact</a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVC9NmY7koypjx-3yyLHMS6sVWMHeNW4bzBlOVdtOP-BsOOA/viewform"
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold text-center mt-4"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;