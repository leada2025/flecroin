// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: "🎯",
      title: "Precision Targeting",
      description: "Selective sodium channel blockade for focused therapeutic action"
    },
    {
      icon: "💎",
      title: "Pharmaceutical Grade",
      description: "99.9% purity ensuring consistent quality and safety"
    },
    {
      icon: "⚡",
      title: "Rapid Action",
      description: "Quick onset with sustained rhythm control"
    },
    {
      icon: "🛡️",
      title: "Proven Safety",
      description: "Established safety profile with minimal side effects"
    }
  ];

  const benefits = [
    "Restores normal heart rhythm by blocking abnormal electrical signals",
    "Maintains regular and steady heartbeat",
    "Advanced formulation for superior bioavailability",
    "Precision delivery system reduces adverse effects"
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

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-800/10 rounded-full blur-3xl"></div>
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
            About <span className="text-cyan-400">Flecroin</span> 50 mg
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced antiarrhythmic therapy for precise cardiac rhythm management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Professional Content */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Description Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-700/30 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                Therapeutic Overview
              </h3>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                <span className="font-semibold text-cyan-300">Flecroin 50 Tablet</span> is a premium antiarrhythmic medication specifically formulated to treat certain types of serious cardiac arrhythmias. It works by selectively blocking abnormal electrical signals in the heart, effectively restoring and maintaining normal sinus rhythm.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">Key Benefits:</h4>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clinical Guidance Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                Clinical Administration
              </h3>
              
              <div className="space-y-4 text-blue-100">
                <p className="text-lg">
                  <strong className="text-cyan-300">Dosage:</strong> Should be taken regularly as advised by healthcare professionals, typically on an empty stomach at fixed intervals.
                </p>
                
                <p className="text-lg">
                  <strong className="text-cyan-300">Monitoring:</strong> Regular follow-up with your cardiologist is essential. Monitoring of blood sugar levels and kidney function may be recommended during therapy.
                </p>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                  <p className="text-yellow-200 text-sm font-medium">
                    ⚠️ <strong>Important:</strong> Do not stop medication abruptly. Consult your doctor for proper discontinuation protocol. Not recommended during pregnancy or breastfeeding without medical supervision.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-lg rounded-xl p-6 border border-blue-700/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-3xl mb-4 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated border */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-b-xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Indications Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-800/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-700/30 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                Approved Indications
              </h3>
              
              <div className="space-y-3">
                {[
                  "Paroxysmal supraventricular tachycardia (PSVT)",
                  "Ventricular arrhythmias",
                  "Atrial fibrillation conversion and maintenance",
                  "Symptomatic premature ventricular beats"
                ].map((indication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-blue-100"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-lg">{indication}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ECG Animation Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5 }}
              className="relative h-2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full mt-4 overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 h-2 w-20 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{
                  x: ['0%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Warning Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-red-900/20 backdrop-blur-lg border border-red-700/30 rounded-2xl p-6 text-center"
        >
          <p className="text-red-200 text-lg font-medium">
            🚨 <strong>Medical Advisory:</strong> Flecroin should only be used under strict medical supervision. 
            Inform your doctor about any pre-existing heart, liver, or kidney conditions, and disclose all concurrent medications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;