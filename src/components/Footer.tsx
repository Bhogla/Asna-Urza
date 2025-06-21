
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 footer-company-logo">
            </div>
            <p className="text-gray-400">
              Leading name in solar energy and energy-efficient products since 2015.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Solar Photovoltaic</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Solar Thermo Technology</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Pumping Solutions</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Mounting Structures</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-gray-400">Raj Tower, Opp. Nirankari Satsang Bhawan, Haridwar Bypass Road, Dehradun-248001</span>
              </li>
              <li className="flex items-center">
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white">+91 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <a href="mailto:info@aasnaurza.com" className="text-gray-400 hover:text-white">info@aasnaurza.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aasna Urza India Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;