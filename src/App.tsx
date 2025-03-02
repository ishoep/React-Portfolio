import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, ExternalLink, Home, Briefcase, User, Star, Award, Coffee, Globe, Cpu, Layout, Smartphone, Database, ChevronRight, ArrowRight, Send, Terminal, Server, Search } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const pageTransition = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  const skills = [
    { icon: <Layout />, name: "Дизайн интерфейсов", level: "Продвинутый" },
    { icon: <Smartphone />, name: "Мобильный дизайн", level: "Эксперт" },
    { icon: <Code2 />, name: "Фронтенд разработка", level: "Продвинутый" },
    { icon: <Database />, name: "Бэкенд разработка", level: "Продвинутый" },
    { icon: <Globe />, name: "Веб-приложения", level: "Эксперт" },
    { icon: <Cpu />, name: "Проектирование систем", level: "Средний" }
  ];

  const expertiseAreas = [
    {
      title: "Frontend Development",
      skills: [
        "HTML, CSS (SCSS), JavaScript (ES6+)",
        "React, Vue.js, Alpine.js",
        "Bootstrap, Tailwind CSS",
        "GSAP, CSS Animations, Lottie",
        "Webpack, Gulp, npm"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "PHP, Python (приоритет)",
        "Rest API, Soap",
        "SQL, MySQL",
        "Nginx, Apache",
        "Ubuntu/Linux"
      ]
    },
    {
      title: "Additional Expertise",
      skills: [
        "UI/UX Design",
        "Git Version Control",
        "SEO Optimization",
        "CMS Integration (WordPress, Bitrix)",
        "Адаптивная верстка"
      ]
    }
  ];

  const projects = [
    {
      title: "Приложение для анализа изображения",
      description: "Веб-приложение, использующее бесплатное API для анализа изображений.",
      image: "https://i.postimg.cc/kM8CrBD3/2025-02-08-183704.png",
      tags: [ "React", "TypeScript", "Vite"]
    },
    {
      title: "Приложение для постановки целей",
      description: "Простое и удобное приложение для организации вашего дня и постановки целей.",
      image: "https://i.postimg.cc/fRjh42ZX/2025-02-06-230035.png",
      tags: [ "React", "TypeScript", "Vite"]
    },
    {
      title: "Мобильное банковское приложение",
      description: "Чистый и интуитивно понятный интерфейс для банковских операций с функциями истории транзакций, оплаты счетов и отслеживания инвестиций.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      tags: ["Мобильный дизайн", "Figma", "Прототипирование", "Исследование пользователей"]
    },
    {
      title: "Платформа для портфолио",
      description: "Платформа для креативов, позволяющая демонстрировать работы с пользовательскими темами, аналитикой и инструментами управления клиентами.",
      image: "https://i.postimg.cc/vHH42SW-n/2025-02-05-225012.png",
      tags: ["Веб-дизайн", "Фронтенд", "React", "MongoDB"]
    },
    {
      title: "Система управления задачами",
      description: "Корпоративная система управления задачами с возможностью совместной работы в реальном времени, обмена файлами и отслеживания прогресса.",
      image: "https://shoel-web.onrender.com/project1.png",
      tags: ["SaaS", "Full Stack", "React", "Node.js"]
    },
    {
      title: "Дизайны товарных карточек и многое другое",
      description: "Другие небольшые но также не менее важные и интересные проекты можно найти в моих соц-сетях",
      image: "https://img.freepik.com/free-vector/gradient-product-card-template_23-2149656335.jpg",
      tags: ["UI/UX", "Full Stack", "React", "Node.js"]
    },
    {
      title: "Платформа для поиска авиабилетов",
      description: "Система которая помогает найти и купить самые дешёвые авиабилеты. Поиск билетов на самолёт по 728 авиакомпаниям, ведущим авиакассам и лучшие цены.",
      image: "https://shoel-web.onrender.com/project3.png",
      tags: [ "React", "TypeScript", "Redux", "Django"]
    }
  ];

  const stats = [
    { icon: <Coffee />, value: "80+", label: "Проектов" },
    { icon: <Star />, value: "50+", label: "Отзывов" },
    { icon: <Award />, value: "10+", label: "Наград" }
  ];

  const handleNavClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSection(section);
  };

  return (
    <div className="app-container min-h-screen">
      {/* Мобильная навигация */}
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

      {/* Навигация для десктопа */}
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
                <div className="glass-card p-6 md:p-8 rounded-2xl mb-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
                    ПРИВЕТ, <span className="text-white">Я</span><br />РЕЙН
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 mb-6">Дизайнер интерфейсов и Full Stack разработчик</p>
                  <div className="flex flex-wrap gap-3">
                    <motion.button 
                      onClick={handleNavClick('projects')} 
                      className="glass-btn px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      Посмотреть проекты <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      onClick={handleNavClick('about')}
                      className="px-4 py-2 rounded-lg flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors text-sm" 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      Обо мне <User className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="glass-card p-4 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-white mb-2">{stat.icon}</div>
                      <div className="font-bold text-xl">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.header>
            )}

            {currentSection === 'about' && (
              <motion.section 
                key="about" 
                {...pageTransition}
                className="min-h-screen py-10 md:py-20 absolute inset-0 overflow-y-auto"
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 mb-4 w-full">
                  <div className="flex flex-col gap-8">
                    {/* Основная информация */}
                    <div>
                      <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
                      <p className="text-gray-300 text-sm md:text-base mb-8">
                        Я увлеченный дизайнер интерфейсов и full stack разработчик с 5-летним опытом создания красивых и функциональных цифровых решений. Я специализируюсь на пользовательском дизайне и современных веб-технологиях, предлагая решения, которые сочетают в себе эстетическую привлекательность и техническое совершенство.
                      </p>
                    </div>

                    {/* Области экспертизы */}
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

                    {/* Основные навыки */}
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
                className="min-h-screen pt-20 pb-20 absolute inset-0 overflow-y-auto"
              >
                <div>
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
