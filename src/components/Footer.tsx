import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Passionate full-stack developer creating innovative digital experiences. 
              I help businesses and individuals bring their ideas to life through clean, 
              efficient code and thoughtful design.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Back to top <ChevronUp size={16} className="ml-1" />
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors capitalize"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3">Follow me</h5>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(platform => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;