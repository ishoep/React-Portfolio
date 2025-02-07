import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Mail, ExternalLink, Home, Briefcase, User, Layout, Smartphone, Database, ChevronRight, ArrowRight, Send, Terminal, Server, Star, Award, Coffee } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavClick = (section) => (e) => {
    e.preventDefault();
    setCurrentSection(section);
  };

  const pageTransition = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3 }
  };

  const expertiseAreas = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
    }
  ];

  const skills = [
    { name: "React", level: "Advanced", icon: <Code2 className="w-5 h-5" /> },
    { name: "Node.js", level: "Advanced", icon: <Server className="w-5 h-5" /> },
    { name: "UI/UX Design", level: "Expert", icon: <Layout className="w-5 h-5" /> },
    { name: "Mobile Dev", level: "Intermediate", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Databases", level: "Advanced", icon: <Database className="w-5 h-5" /> },
    { name: "DevOps", level: "Intermediate", icon: <Terminal className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
      title: "CRM System",
      description: "Comprehensive customer relationship management system for business automation",
      image: "/projects/crm.jpg",
      tags: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application for health and fitness tracking",
      image: "/projects/mobile.jpg",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with advanced data visualization",
      image: "/projects/dashboard.jpg",
      tags: ["Next.js", "D3.js", "Node.js"]
    }
  ];

  return (
    <div className="app-container min-h-screen">
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-nav h-16 flex items-center justify-around z-50">
        <a href="#home" onClick={handleNavClick('home')} className={`nav-item ${currentSection === 'home' ? 'text-white' : 'text-gray-500'}`}>
          <Home className="w-5 h-5" />
        </a>
        <a href="#about" onClick={handleNavClick('about')} className={`nav-item ${currentSection === 'about' ? 'text-white' : 'text-gray-500'}`}>
          <User className="w-5 h-5" />
        </a>
        <a href="#projects" onClick={handleNavClick('projects')} className={`nav-item ${currentSection === 'projects' ? 'text-white' : 'text-gray-500'}`}>
          <Briefcase className="w-5 h-5" />
        </a>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-16 glass-nav items-center justify-center">
        <div className="flex flex-col gap-8">
          <motion.div className="flex flex-col gap-6" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <a href="#home" onClick={handleNavClick('home')} className={`nav-item ${currentSection === 'home' ? 'text-white' : 'text-gray-500'}`}>
              <Home className="w-5 h-5" />
            </a>
            <a href="#about" onClick={handleNavClick('about')} className={`nav-item ${currentSection === 'about' ? 'text-white' : 'text-gray-500'}`}>
              <User className="w-5 h-5" />
            </a>
            <a href="#projects" onClick={handleNavClick('projects')} className={`nav-item ${currentSection === 'projects' ? 'text-white' : 'text-gray-500'}`}>
              <Briefcase className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div className="flex flex-col gap-6" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <a href="https://github.com/ishoep" className="nav-item hover:text-white text-gray-500"><Github className="w-5 h-5" /></a>
            <a href="https://t.me/qdweb" className="nav-item hover:text-white text-gray-500"><Send className="w-5 h-5" /></a>
            <a href="mailto:studio@webalt.xyz" className="nav-item hover:text-white text-gray-500"><Mail className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </nav>

      <div className="md:ml-16 p-4 pb-20 md:pb-4">
        <div className="max-w-7xl mx-auto relative">
          <AnimatePresence mode="wait">
            {currentSection === 'home' && (
              <motion.header 
                key="home" 
                {...pageTransition}
                className="min-h-screen flex flex-col justify-center absolute inset-0"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Привет, я Full Stack разработчик
                </motion.h1>
                <motion.p 
                  className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Создаю современные веб-приложения, сочетающие инновационный дизайн и передовые технологии
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="#projects" onClick={handleNavClick('projects')} className="glass-btn px-6 py-3 rounded-xl flex items-center gap-2">
                    Посмотреть проекты <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="https://t.me/qdweb" className="glass-btn px-6 py-3 rounded-xl">
                    Связаться со мной
                  </a>
                </motion.div>
              </motion.header>
            )}

            {currentSection === 'about' && (
              <motion.section 
                key="about" 
                {...pageTransition}
                className="min-h-screen py-10 md:py-20 absolute inset-0 overflow-y-auto"
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 mb-20">
                  <div className="flex flex-col gap-8">
                    {/* Main Information */}
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
                      <p className="text-gray-300 text-sm md:text-base mb-8">
                        Я увлеченный дизайнер интерфейсов и full stack разработчик с 5-летним опытом создания красивых и функциональных цифровых решений. Я специализируюсь на пользовательском дизайне и современных веб-технологиях, предлагая решения, которые сочетают в себе эстетическую привлекательность и техническое совершенство.
                      </p>
                    </div>

                    {/* Expertise Areas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {expertiseAreas.map((area, index) => (
                        <motion.div
                          key={index}
                          className="glass-btn p-6 rounded-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <h3 className="text-lg font-semibold mb-4">{area.title}</h3>
                          <ul className="space-y-2">
                            {area.skills.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    {/* Core Skills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {skills.map((skill, index) => (
                        <motion.div 
                          key={index} 
                          className="glass-btn p-3 rounded-xl hover:bg-opacity-50 transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-white">{skill.icon}</div>
                            <div>
                              <div className="font-medium text-xs md:text-sm">{skill.name}</div>
                              <div className="text-gray-400 text-xs">{skill.level}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {currentSection === 'projects' && (
              <motion.section 
                key="projects" 
                {...pageTransition}
                className="min-h-screen pt-10 md:pt-20 pb-20 absolute inset-0 overflow-y-auto"
              >
                <div className="mb-20">
                  <h2 className="text-3xl font-bold mb-6">Избранные проекты</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                      <motion.div 
                        key={index} 
                        className="glass-card rounded-xl overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="relative h-48">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="glass-btn px-3 py-1 rounded-full text-xs text-white">{tag}</span>
                            ))}
                          </div>
                          <motion.a 
                            href="https://t.me/qdweb" 
                            className="flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            Посмотреть проект <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
