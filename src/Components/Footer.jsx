// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        "Why Flecroin?",
        "How It Works",
        "FAQ",
        "CONTACT"
      ]
    },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-black to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section with Larger Logo */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-start space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Larger Logo Image */}
              <div className="w-44 h-40 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/Nvron.webp" 
                  alt="Flecroin Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if logo image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div 
                  className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <span className="text-white font-bold text-xl">F</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-1 text-white">Flecroin™</h3>
                <p className="text-cyan-300 text-base mb-3">Precision in Rhythm, Purity in Therapy</p>
                
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h5 className="font-semibold text-xl mb-1 text-cyan-300">Nvron Life Science</h5>
                  <p className="text-blue-200 text-sm">Innovating Cardiac Care Excellence</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-blue-200 mb-6 leading-relaxed max-w-md text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Committed to advancing cardiac rhythm management through innovative anti-arrhythmic therapies 
              and comprehensive patient support programs.
            </motion.p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
            >
              <h4 className="font-bold text-lg mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '').replace('?', '')}`} 
                      className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 hover:underline"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✉️</span>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">Email</p>
                  <a 
                    href="mailto:info@nvron.in" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors break-all"
                  >
                    info@nvron.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">Phone</p>
                  <a 
                    href="tel:+917904389003" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    +91 79043 89003
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">📍</span>
                </div>
                <div>
                  <p className="text-blue-200 font-medium">Address</p>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    SF No 434, 29/2, Athipalayam Rd,<br />
                    Sri Lakshmi Nagar, Ganapathy,<br />
                    Coimbatore, Tamil Nadu - 641006
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-blue-700 mt-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 bg-gradient-to-r from-black to-black">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-blue-200 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Nvron Life Science. All Rights Reserved.
            </motion.p>
            
            <motion.div 
              className="text-blue-300 text-sm text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Developed by Leada Digital Dynamics
            </motion.div>
          </div>

          {/* Medical Disclaimer */}
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-blue-300 text-xs max-w-4xl mx-auto">
              💊 Important Safety Information: Flecroin™ (Flecainide 50 mg / 100 mg) is a prescription medication for cardiac arrhythmias. 
              Always consult with your healthcare provider for medical advice. Do not change your dosage 
              without consulting your doctor. Read the full prescribing information and discuss any 
              questions with your healthcare provider.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 opacity-20"
      >
        <div className="w-16 h-8 bg-cyan-500 rounded-full blur-lg"></div>
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-10 right-10 opacity-20"
      >
        <div className="w-12 h-6 bg-blue-500 rounded-full blur-lg"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;