// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import WhyFlecroin from './Components/WhyFlecroin';
import HowItWorks from './Components/HowItWorks';

import Footer from './Components/Footer';
import FAQ from './Components/Faq';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <About />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <WhyFlecroin />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <HowItWorks />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <FAQ />
      </motion.div>
      
      <Footer />
    </div>
  );
}

export default App;