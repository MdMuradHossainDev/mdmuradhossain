import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-500/10 animate-gradient bg-[length:400%_400%]"></div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-accent-500/10 via-transparent to-transparent"></div>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 py-20 md:py-0"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
              Hi, I'm Md Murad Hossain
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
           Developer | Web Designer | IT Specialist

          </motion.p>
          
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium rounded-full border border-primary-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-gray-600 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </motion.a>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Github, href: 'https://github.com/MdMuradHossainDev', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mdmuradhossaindev/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:muradhossain.web@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.button 
        onClick={scrollToNext}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 animate-bounce-slow transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;