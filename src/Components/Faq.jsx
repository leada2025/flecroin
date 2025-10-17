// src/components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is Flecroin 50 Tablet a beta blocker?",
      answer: "No, Flecroin 50 Tablet is not a beta blocker. It belongs to anti-arrhythmic class of medicines. It works by blocking the fast sodium channels in the heart, thereby treating abnormal rhythm (arrhythmias). It slows down certain electrical impulses generated in the heart and stabilizes it."
    },
    {
      question: "Is weight gain a side effect of Flecroin 50 Tablet?",
      answer: "No, weight gain is not a direct side effect of Flecroin 50 Tablet. However, it may cause conditions like heart failure and edema (fluid retention) as a side effect. Edema is a condition in which the body swells as the body starts retaining fluid. Due to this, it may appear that you have gained weight. Edema can be due to many reasons, among those heart failure is one. Contact your doctor in case this happens."
    },
    {
      question: "Can you drink milk with Flecroin 50 Tablet?",
      answer: "Interference with the absorption of Flecroin 50 Tablet has been observed when taken with dairy products (milk, infant formula, and possibly yogurt). This decreases the level of medicine in the blood and as a result desired effect is not seen. However, it was observed that Flecroin 50 Tablet side effects were more in children who reduced their milk intake. Hence, the dose of Flecroin 50 Tablet needs to be modified accordingly if there is a change in the quantity of milk intake."
    },
    {
      question: "Does Flecroin 50 Tablet lower your heart rate?",
      answer: "Yes, Flecroin 50 Tablet may lower your heart rate. It may also cause an increase in heart rate, palpitations, decrease in blood pressure, heart block, and heart attack. Therefore, your doctor may start the treatment in a hospital setting and continuously monitor your condition during the course of treatment. Initially, you will be started on a low dose and then the dose may be gradually increased. Your doctor may also decrease your dose once your condition is controlled."
    },
    {
      question: "How should Flecroin 50 Tablet be taken?",
      answer: "Flecroin 50 Tablet should be taken exactly as prescribed by your doctor. It is usually taken on an empty stomach, at least 1 hour before or 2 hours after meals. The dosage is based on your medical condition and response to treatment. Do not increase your dose or take this medication more often than directed."
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "If you miss a dose, take it as soon as you remember. If it is near the time of the next dose, skip the missed dose. Take your next dose at the regular time. Do not double the dose to catch up. Consult your doctor if you have any questions about missed doses."
    },
    {
      question: "Can Flecroin 50 Tablet be used during pregnancy?",
      answer: "Flecroin should be used during pregnancy only if clearly needed. Discuss the risks and benefits with your doctor. This medication passes into breast milk, so consult your doctor before breastfeeding while using this medicine."
    },
    {
      question: "What precautions should I take while using Flecroin?",
      answer: "Inform your doctor about your complete medical history, especially of: heart problems (such as heart failure, recent heart attack), kidney disease, liver disease, pacemaker. This drug may make you dizzy. Do not drive, use machinery, or do any activity that requires alertness until you can do it safely. Limit alcoholic beverages."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const contentVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-800/5 rounded-full blur-2xl"></div>
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
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Get answers to common questions about Flecroin 50 Tablet usage, side effects, and precautions.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.div
                className="bg-gradient-to-br from-blue-800/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl border border-blue-700/30 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question Header */}
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Answer Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-blue-700/30 pt-4">
                        <p className="text-blue-200 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information Section */}
      

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-red-900/20 backdrop-blur-lg border border-red-700/30 rounded-2xl p-6 text-center"
        >
          <p className="text-red-200 text-sm font-medium">
            🚨 <strong>Medical Emergency:</strong> If you experience severe side effects like chest pain, difficulty breathing, or rapid heartbeat, seek immediate medical attention. Do not wait for your next scheduled appointment.
          </p>
        </motion.div>

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
          className="absolute left-10 bottom-10 opacity-20"
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
          className="absolute right-10 top-10 opacity-20"
        >
          <div className="w-12 h-6 bg-blue-500 rounded-full blur-lg"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;