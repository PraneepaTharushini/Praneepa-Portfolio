import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import profileImage from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 md:pt-24"
    >
      <div className="container-custom">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={profileImage}
                    alt="Praneepa Tharushini - Portfolio Photo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center"><span class="text-6xl md:text-7xl font-bold text-primary-600">PT</span></div>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Praneepa
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block">
                Tharushini
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
              BSc Hons Information Systems Student | Chartered Accountancy
              Student | Aspiring Full Stack Developer & QA Engineer
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              2nd Year Undergraduate at Sabaragamuwa University of Sri Lanka,
              passionate about developing innovative web solutions and ensuring
              quality through comprehensive testing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              View My Work
              <ChevronDown size={20} />
            </a>

            <a
              href="mailto:tharushini722@gmail.com"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>

            <button className="bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Education
              </h3>
              <p className="text-gray-600">Information Systems</p>
              <p className="text-sm text-gray-500">Sabaragamuwa University of Sri Lanka</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Certification
              </h3>
              <p className="text-gray-600">Chartered Accountancy</p>
              <p className="text-sm text-gray-500">CA Sri Lanka</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Focus Areas
              </h3>
              <p className="text-gray-600">Full Stack Development</p>
              <p className="text-sm text-gray-500">Quality Assurance</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
