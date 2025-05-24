import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Utensils } from "lucide-react";

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full mx-auto px-4 py-4 overflow-x-hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-poppins font-bold text-gray-800 lg:pl-4">
              Daniel's Table
            </h1>
            <Utensils className="ml-2 text-amber-600 w-6 h-6" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "menu", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`px-2 py-1 font-medium ${
                  activeSection === section
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-700 hover:text-amber-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 mr-6 text-gray-700 hover:text-amber-600"
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-600"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {["home", "menu", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollTo(section);
                    setIsMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-left font-medium ${
                    activeSection === section
                      ? "text-amber-600"
                      : "text-gray-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
