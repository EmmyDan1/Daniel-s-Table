import { Utensils } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-serif font-bold mb-4">
                Daniel's Table
              </h3>
              <Utensils className="w-6 h-6 text-amber-600 mb-4" />
            </div>
            <p className="text-gray-400">
              Where culinary artistry meets exceptional service for an
              unforgettable dining experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Daniel's Street, Culinary District</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>(+234) 9131276935</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>emmydan68@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-md"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Daniel's Table. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
