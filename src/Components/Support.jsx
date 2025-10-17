// src/components/Support.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const resources = [
    {
      title: "Patient Information Leaflet",
      description: "Complete guide for patients using Flecroin",
      icon: "📋",
      action: "Download PDF"
    },
    {
      title: "Healthcare Professional Guide",
      description: "Detailed prescribing information for doctors",
      icon: "👨‍⚕️",
      action: "Access Resources"
    },
    {
      title: "Medical Support Hotline",
      description: "24/7 support for healthcare professionals",
      icon: "📞",
      action: "Call Now"
    },
    {
      title: "Clinical Studies",
      description: "Access to research and trial data",
      icon: "🔬",
      action: "View Studies"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section id="resourcessupport" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Resources & <span className="text-medical-blue">Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support materials and professional assistance for patients and healthcare providers.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl mb-4 w-16 h-16 bg-gradient-to-r from-medical-blue to-medical-light rounded-xl flex items-center justify-center text-white shadow-lg mx-auto"
              >
                {resource.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {resource.description}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-medical-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors w-full"
              >
                {resource.action}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Contact Our Medical Team
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Have questions? Our medical experts are here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-medical-blue to-medical-light text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-red-800 mb-2">
                  🚨 Emergency Medical Assistance
                </h4>
                <p className="text-red-700 mb-3">
                  For immediate medical concerns or adverse reactions, contact emergency services:
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="tel:911"
                    whileHover={{ scale: 1.05 }}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Emergency: 911
                  </motion.a>
                  <motion.a
                    href="tel:1-800-MED-HELP"
                    whileHover={{ scale: 1.05 }}
                    className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Medical Hotline: 1-800-MED-HELP
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;