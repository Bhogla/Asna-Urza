import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/src/assets/company-logo.jpg" alt="Company Logo" className="h-16 w-auto" />
              <span className="ml-2 text-green-600 text-base sm:text-[30px] font-sans hidden sm:block">For Sustainable Tomorrow</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`}>Home</Link>
            <Link to="/products" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`}>Products</Link>
            <Link to="/about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`}>About</Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`}>Contact</Link>
            <a href="tel:+911234567890" className={`flex items-center ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              <Phone className="h-5 w-5 mr-2" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-600`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/products" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Products</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
              <a href="tel:+911234567890" className="flex items-center px-3 py-2 text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
