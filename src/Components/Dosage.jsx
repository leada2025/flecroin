// src/components/Dosage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dosage = () => {
  const [activeTab, setActiveTab] = useState('50mg');

  const dosageInfo = {
    '50mg': {
      title: "50 mg Tablet",
      description: "Initial recommended dosage for most patients",
      indications: [
        "Paroxysmal supraventricular tachycardia",
        "Atrial fibrillation conversion",
        "Maintenance of sinus rhythm"
      ],
      administration: [
        "Take every 12 hours with or without food",
        "Initial dose: 50 mg twice daily",
        "May be increased to 100 mg twice daily after 4 days"
      ],
      precautions: [
        "Monitor ECG periodically",
        "Adjust dose in renal impairment",
        "Not recommended in severe heart failure"
      ]
    },
    '100mg': {
      title: "100 mg Tablet",
      description: "Higher strength for patients requiring increased dosage",
      indications: [
        "Sustained ventricular tachycardia",
        "Severe arrhythmia cases",
        "After initial 50 mg titration"
      ],
      administration: [
        "100 mg twice daily maintenance dose",
        "Maximum dose: 150 mg twice daily",
        "Always follow physician guidance"
      ],
      precautions: [
        "Close cardiac monitoring required",
        "Regular liver function tests",
        "Monitor for proarrhythmic effects"
      ]
    }
  };

  const tabVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.05, opacity: 1 }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section id="dosageusage" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dosage & <span className="text-medical-blue">Usage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Precise dosing guidelines for optimal therapeutic outcomes and patient safety.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-blue-100">
            {['50mg', '100mg'].map((tab) => (
              <motion.button
                key={tab}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-medical-blue to-medical-light text-white shadow-md'
                    : 'text-gray-600 hover:text-medical-blue'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Capsule Visualization */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          glow: [0, 1, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-32 h-16 bg-gradient-to-r from-white to-blue-50 rounded-full border-4 border-blue-200 shadow-2xl relative"
                      >
                        <div className="w-1/2 h-full bg-gradient-to-r from-medical-blue to-medical-light rounded-l-full border-r-4 border-white"></div>
                        <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></div>
                      </motion.div>
                      <div className="text-center mt-4">
                        <span className="text-sm font-semibold text-gray-600">
                          {dosageInfo[activeTab].title}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {dosageInfo[activeTab].title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {dosageInfo[activeTab].description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-medical-blue mb-3 flex items-center">
                          <span className="w-2 h-2 bg-medical-blue rounded-full mr-2"></span>
                          Indications
                        </h4>
                        <ul className="text-gray-600 space-y-2">
                          {dosageInfo[activeTab].indications.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="text-medical-blue mr-2">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-medical-blue mb-3 flex items-center">
                          <span className="w-2 h-2 bg-medical-blue rounded-full mr-2"></span>
                          Administration
                        </h4>
                        <ul className="text-gray-600 space-y-2">
                          {dosageInfo[activeTab].administration.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.2 }}
                              className="flex items-start"
                            >
                              <span className="text-medical-blue mr-2">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-medical-blue mb-3 flex items-center">
                          <span className="w-2 h-2 bg-medical-blue rounded-full mr-2"></span>
                          Precautions
                        </h4>
                        <ul className="text-gray-600 space-y-2">
                          {dosageInfo[activeTab].precautions.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.4 }}
                              className="flex items-start"
                            >
                              <span className="text-medical-blue mr-2">•</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                >
                  <p className="text-yellow-800 text-sm text-center">
                    <strong>Important:</strong> Always consult with a healthcare professional before starting or changing medication. Dosage should be individualized based on patient response and clinical status.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Dosage;