import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Praneepa Tharushini</h3>
              <p className="text-gray-300 mb-4">
                BSc Hons Information Systems Student passionate about full-stack
                development and quality assurance.
              </p>
              <p className="text-gray-300">
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  <a
                    href="mailto:tharushini722@gmail.com"
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    tharushini722@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+94711318454"
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    +94 71 131 8454
                  </a>
                </p>
                <p>Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Praneepa Tharushini</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-300">
                © {new Date().getFullYear()} All rights reserved.
              </span>

              <button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
