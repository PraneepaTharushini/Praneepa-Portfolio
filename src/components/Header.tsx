import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 px-4 md:px-0">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">
              Praneepa
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:tharushini722@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+94711318454"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              title="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors duration-200 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-lg absolute left-0 right-0 top-full">
            <div className="container-custom px-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href="mailto:tharushini722@gmail.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="tel:+94711318454"
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Phone size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
