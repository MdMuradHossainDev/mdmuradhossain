import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration built with React and Node.js.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg',
      tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data from multiple sources with interactive charts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: ['JavaScript', 'API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website template for developers and designers with customizable sections.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Booking System',
      description: 'An online reservation system for restaurants with table management and customer notifications.',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      tags: ['Node.js', 'Express', 'MongoDB', 'React'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking application with workout plans, progress charts, and social features.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      tags: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = ['all', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12"></div>
        
        <div className="flex flex-wrap justify-center mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 m-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-sm px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;