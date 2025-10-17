// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with actual hero image */}
      <div className="absolute inset-0">
        {/* Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/flecroin.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Light overlay only for text readability, not for color filtering */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content - Aligned to left */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Text content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Flecroin™
                <span className="block text-lg md:text-xl lg:text-3xl font-normal mt-2 text-blue-200">
                  Flecainide 50 mg / 100 mg Tablets
                </span>
              </h1>
              
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Precision in Rhythm, Purity in Therapy
              </motion.h2>

              <motion.p 
                className="text-lg md:text-xl mb-8 leading-relaxed text-white/90 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                For the prevention of supraventricular arrhythmias and ventricular arrhythmias with enhanced precision and reduced adverse effects.
              </motion.p>

              {/* Features List */}
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90 text-lg">
                    <strong>Enhanced Bioavailability:</strong> Flecroin offers superior absorption and consistent plasma levels for reliable therapeutic effects.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90 text-lg">
                    <strong>Precision Targeting:</strong> Advanced formulation minimizes systemic side effects while maximizing cardiac rhythm control.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-white/90 text-lg">
                    <strong>Clinically Proven Efficacy:</strong> Extensive clinical trials demonstrate superior stability and patient outcomes.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
               
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Empty for image background */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Floating medical elements */}
      <motion.div 
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div 
        className="absolute top-1/2 left-1/3 w-8 h-8 bg-white/10 rounded-full blur-lg"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* ECG Animation Line */}
     
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Medical badge */}
      

      {/* Floating Capsule */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-20 top-1/3 hidden xl:block"
      >
     
      </motion.div>
    </section>
  );
};

export default Hero;