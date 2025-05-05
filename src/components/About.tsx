import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="src/assets/Md Murad Hossain.JPG" 
                  alt="Portrait" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Md Murad Hossain <br /> Full Stack Developer | Web Designer | IT Specialist <br />
              🚀 Passionate Web Developer & Designer <br />
              📚 Learning HTML | Tailwind CSS | JavaScript <br />
              🎯 Focused on Dynamic Web Applications & UI/UX <br />
              💼 IT Officer at Merit Care Academy & Publications <br />
              📍 Based in Bangladesh <br />
              </p>
                            <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;