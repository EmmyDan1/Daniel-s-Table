import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-900 tracking-tight">
          FoodHaus
        </h1>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium py-1 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
