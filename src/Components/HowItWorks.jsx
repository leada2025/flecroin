// src/components/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Oral Administration",
      description: "Flecroin is administered orally with rapid gastrointestinal absorption and consistent dosing",
      icon: "💊",
      details: ["Taken on empty stomach", "Rapid dissolution", "Consistent absorption"]
    },
    {
      number: "02",
      title: "Systemic Absorption",
      description: "Advanced formulation ensures optimal bioavailability with stable plasma concentration",
      icon: "🔄",
      details: ["High bioavailability", "Stable plasma levels", "Predictable kinetics"]
    },
    {
      number: "03",
      title: "Cardiac Targeting",
      description: "Selective sodium channel blockade stabilizes myocardial electrical activity",
      icon: "🎯",
      details: ["Na+ channel blockade", "Membrane stabilization", "Reduced excitability"]
    },
    {
      number: "04",
      title: "Rhythm Control",
      description: "Maintains normal sinus rhythm by suppressing abnormal electrical impulses",
      icon: "❤️",
      details: ["Sinus rhythm maintenance", "Arrhythmia suppression", "Stable heartbeat"]
    }
  ];

  const mechanismDetails = [
    {
      title: "Sodium Channel Blockade",
      description: "Inhibits cardiac sodium channels to slow conduction velocity",
      effect: "Reduces abnormal electrical signals"
    },
    {
      title: "Membrane Stabilization",
      description: "Stabilizes myocardial cell membranes preventing erratic impulses",
      effect: "Prevents arrhythmia triggers"
    },
    {
      title: "Refractory Period Extension",
      description: "Prolongs the effective refractory period of cardiac cells",
      effect: "Reduces re-entry circuits"
    }
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

  const stepVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const mechanismVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <section id="howitworks" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-800/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How <span className="text-cyan-400">Flecroin</span> Works
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-6">
            Understanding the precise anti-arrhythmic mechanism that makes Flecroin the preferred choice for cardiac rhythm management.
          </p>
          <div className="bg-cyan-900/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-700/30 max-w-4xl mx-auto">
            <p className="text-cyan-100 text-lg leading-relaxed">
              <strong className="text-cyan-300">Mechanism of Action:</strong> Flecroin 50 Tablet is an anti-arrhythmic medication that works by blocking abnormal electrical signals in the heart to correct irregular heartbeat and restore normal rhythm.
            </p>
          </div>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 transform -translate-x-1/2 hidden md:block shadow-lg shadow-cyan-500/25"
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                whileHover="hover"
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-xl font-bold mb-4 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300"
                  >
                    {step.number}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed max-w-md mx-auto md:mx-0 mb-4">
                    {step.description}
                  </p>

                  {/* Step Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + detailIndex * 0.1 }}
                        className="flex items-center space-x-2 text-blue-100 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-3xl text-cyan-300 shadow-lg border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300"
                >
                  {step.icon}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mechanism of Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Detailed <span className="text-cyan-400">Mechanism of Action</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mechanismDetails.map((mechanism, index) => (
              <motion.div
                key={mechanism.title}
                variants={mechanismVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-700/30 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-cyan-300 mb-3">
                  {mechanism.title}
                </h4>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  {mechanism.description}
                </p>
                <div className="bg-cyan-900/20 rounded-lg p-3 border border-cyan-700/30">
                  <p className="text-cyan-100 text-xs font-medium">
                    <strong>Effect:</strong> {mechanism.effect}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        

  
       
      </div>
    </section>
  );
};

export default HowItWorks;