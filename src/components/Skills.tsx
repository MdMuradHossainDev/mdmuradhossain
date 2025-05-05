import React from 'react';
import { Code, Server, Layout, Database, Smartphone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills, color, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
    >
      <motion.div 
        className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-6`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
            className="text-gray-700 dark:text-gray-300 flex items-center"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-2"></span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend',
      icon: <Layout size={24} className="text-white" />,
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'NextJS', 'Redux'],
      color: 'bg-gradient-to-r from-primary-500 to-accent-500'
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="text-white" />,
      skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL'],
      color: 'bg-gradient-to-r from-accent-500 to-primary-500'
    },
    {
      title: 'Programming',
      icon: <Code size={24} className="text-white" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'],
      color: 'bg-gradient-to-r from-primary-600 to-accent-600'
    },
    {
      title: 'Database',
      icon: <Database size={24} className="text-white" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      color: 'bg-gradient-to-r from-accent-600 to-primary-600'
    },
    {
      title: 'Mobile',
      icon: <Smartphone size={24} className="text-white" />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Responsive Design'],
      color: 'bg-gradient-to-r from-primary-700 to-accent-700'
    },
    {
      title: 'Other',
      icon: <Globe size={24} className="text-white" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum'],
      color: 'bg-gradient-to-r from-accent-700 to-primary-700'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <SkillCard 
                key={index}
                index={index}
                title={skill.title}
                icon={skill.icon}
                skills={skill.skills}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;