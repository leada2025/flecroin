// src/components/WhyFlecroin.jsx
import React from 'react';
import { motion } from 'framer-motion';

const WhyFlecroin = () => {
  const benefits = [
    {
      title: "Enhanced Bioavailability",
      description: "Superior absorption profile with optimal therapeutic drug levels and consistent plasma concentration",
      icon: "📈",
      features: ["Higher absorption rate", "Stable plasma levels", "Reduced dosing frequency"]
    },
    {
      title: "Superior Stability",
      description: "Extended shelf life with guaranteed potency and consistent therapeutic effect across all batches",
      icon: "🛡️",
      features: ["Longer expiration", "Batch consistency", "Temperature stability"]
    },
    {
      title: "Reduced Adverse Effects",
      description: "Precision cardiac targeting minimizes systemic side effects and improves patient tolerance",
      icon: "❤️",
      features: ["Fewer GI issues", "Lower CNS effects", "Better compliance"]
    },
    {
      title: "Clinically Proven Efficacy",
      description: "Extensive clinical validation demonstrating superior rhythm control and patient outcomes",
      icon: "🔬",
      features: ["Multi-center trials", "Long-term data", "Real-world evidence"]
    }
  ];

  const stats = [
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24h", label: "Sustained Effect" },
    { number: "99.9%", label: "Purity Grade" },
    { number: "5+", label: "Clinical Studies" }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const statVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <section id="whyflecroin" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-800/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-cyan-400">Flecroin</span>?
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Advanced therapeutic advantages designed for superior cardiac rhythm management and optimal patient outcomes.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover="hover"
              className="text-center bg-blue-800/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-700/30 hover:border-cyan-500/50 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-blue-200 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-blue-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-700/30 h-full shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-3xl mb-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto"
                >
                  {benefit.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-blue-200 text-sm leading-relaxed text-center mb-4">
                  {benefit.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center space-x-2 text-blue-100 text-xs"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated ECG Line */}
                <motion.div
                  className="relative h-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full mt-6 overflow-hidden"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-1 w-8 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    animate={{
                      x: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
       
      </div>
    </section>
  );
};

export default WhyFlecroin;