import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      try {
        const result = await emailjs.sendForm(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          formRef.current!,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        );

        if (result.text === 'OK') {
          setSubmitStatus({
            type: 'success',
            message: 'Message sent successfully! I\'ll get back to you soon.'
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-12"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 rounded-full text-primary-600 dark:text-primary-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">San Francisco, CA 94105, United States</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 rounded-full text-primary-600 dark:text-primary-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="mr-4 p-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 rounded-full text-primary-600 dark:text-primary-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">contact@example.com</p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  variants={itemVariants}
                  className="mt-12"
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map(platform => (
                      <motion.a
                        key={platform}
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 hover:from-primary-200 hover:to-accent-200 dark:hover:from-primary-800/50 dark:hover:to-accent-800/50 transition-all duration-300"
                      >
                        <span className="sr-only">{platform}</span>
                        <i className={`fab fa-${platform}`}></i>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
                
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;