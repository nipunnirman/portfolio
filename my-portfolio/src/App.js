import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Brain, Cloud, Database, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    programming: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'PHP'],
    ml: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Decision Trees', 'LLMs', 'XGBoost'],
    frameworks: ['React', 'FastAPI', 'Streamlit', 'LangChain'],
    tools: ['Git', 'Docker', 'Azure', 'MLflow', 'GitHub Actions'],
    databases: ['MySQL', 'MongoDB', 'ChromaDB']
  };

  const projects = [
    {
      title: 'Dementia Risk Prediction Model',
      description: 'Binary classification model achieving 94.19% ROC-AUC for dementia prediction using 195,196 clinical records from NACC dataset.',
      highlights: [
        '94.19% ROC-AUC with minimal overfitting',
        '18 derived features through feature engineering',
        '90.16% accuracy with 83.27% F1-score'
      ],
      tech: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Exoplanet Discovery using Kepler Data',
      description: 'ML model predicting exoplanet candidates from NASA Kepler telescope data with interactive Streamlit application.',
      highlights: [
        'XGBoost binary classification on 15 astrophysical features',
        'SHAP explainability integration',
        'Real-time probability predictions'
      ],
      tech: ['Python', 'XGBoost', 'Streamlit', 'Scikit-Learn', 'SHAP']
    },
    {
      title: 'NASA Hybrid RAG System',
      description: 'Advanced Retrieval-Augmented Generation system combining vector search and keyword search for NASA technical documents.',
      highlights: [
        'ChromaDB + BM25 hybrid search',
        'AI agent with 6+ NASA API integrations',
        'Docker containerized on AWS Elastic Beanstalk'
      ],
      tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'FastAPI', 'Docker']
    },
    {
      title: 'Cricket Toss Analysis & Prediction',
      description: 'Comprehensive cricket analytics platform analyzing 500+ matches across Sri Lankan grounds.',
      highlights: [
        '75%+ accuracy in match outcome prediction',
        'MAE < 20 runs for score prediction',
        'Real-time weather API integration'
      ],
      tech: ['Python', 'XGBoost', 'Streamlit', 'FastAPI', 'Docker', 'AWS']
    },
    {
      title: 'React E-Commerce Website',
      description: 'Responsive online store with shopping cart, product filtering, and mobile-first design.',
      highlights: [
        'Responsive design for all devices',
        'Product filtering and search',
        'Shopping cart functionality'
      ],
      tech: ['React', 'CSS', 'JavaScript', 'PHP']
    }
  ];

  const certifications = [
    'Microsoft Azure AI-900',
    'Python – University of Moratuwa',
    'Deep Learning With Python (LinkedIn)',
    'AI Engineer - StemLink',
    'LangGraph Essential – Python',
    'NASA Space Apps Challenge: Hunting for Exoplanets with AI'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes borderLight {
          0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
          25% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
          50% { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
          75% { clip-path: polygon(100% 100%, 100% 100%, 0 100%, 0 100%); }
          100% { clip-path: polygon(0 100%, 0 100%, 0 0, 0 0); }
        }

        .glow-box {
          position: relative;
          background: #0a0a0a;
          border-radius: 12px;
          padding: 1px;
        }

        .glow-box::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(90deg, #34c3eb, #34c3eb);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderLight 3s linear infinite;
        }

        .glow-box-content {
          position: relative;
          background: #0a0a0a;
          border-radius: 11px;
          height: 100%;
          z-index: 1;
        }

        .cyber-text {
          text-shadow: 0 0 10px #34c3eb, 0 0 20px #34c3eb;
        }

        .skill-tag {
          background: rgba(52, 195, 235, 0.1);
          border: 1px solid rgba(52, 195, 235, 0.3);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(52, 195, 235, 0.2);
          border-color: #34c3eb;
          box-shadow: 0 0 15px rgba(52, 195, 235, 0.5);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold cyber-text">NR</h1>
            <div className="flex gap-6">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-[#34c3eb] transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-[#34c3eb]' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8">
            <h2 className="text-6xl font-bold mb-4 cyber-text">Nipun Nirman Rathnayaka</h2>
            <p className="text-2xl text-gray-400 mb-6">Machine Learning Engineer | Full-Stack Developer</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about building intelligent, scalable applications that solve real-world problems through AI and modern web technologies.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/nipunnirman" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full border border-[#34c3eb] hover:bg-[#34c3eb]/20 transition-all">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nipun-rathnayaka-889714250/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full border border-[#34c3eb] hover:bg-[#34c3eb]/20 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nipunnirman999@gmail.com"
               className="p-3 rounded-full border border-[#34c3eb] hover:bg-[#34c3eb]/20 transition-all">
              <Mail size={24} />
            </a>
          </div>

          <div className="flex justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>0757105455</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Badulla, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cyber-text">About Me</h2>
          <div className="glow-box">
            <div className="glow-box-content p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science undergraduate at the University of Westminster, specializing in Machine Learning and Full-Stack Development. With hands-on experience in building production-ready AI systems and scalable web applications, I thrive on solving complex real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My expertise spans from developing sophisticated ML models with 94%+ accuracy to building end-to-end applications with modern frameworks. I've worked on diverse projects including healthcare AI, space data analysis, and cricket analytics, always focusing on delivering impactful solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <Brain className="w-12 h-12 mx-auto mb-3 text-[#34c3eb]" />
                  <h3 className="font-bold mb-2">ML Engineer</h3>
                  <p className="text-sm text-gray-400">Advanced models with XGBoost, TensorFlow, and LLMs</p>
                </div>
                <div className="text-center p-4">
                  <Code className="w-12 h-12 mx-auto mb-3 text-[#34c3eb]" />
                  <h3 className="font-bold mb-2">Full-Stack Dev</h3>
                  <p className="text-sm text-gray-400">React, FastAPI, and modern web technologies</p>
                </div>
                <div className="text-center p-4">
                  <Cloud className="w-12 h-12 mx-auto mb-3 text-[#34c3eb]" />
                  <h3 className="font-bold mb-2">Cloud & DevOps</h3>
                  <p className="text-sm text-gray-400">Docker, Azure, AWS deployment experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="glow-box">
                <div className="glow-box-content p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#34c3eb]">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#34c3eb] mt-2"></div>
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glow-box">
              <div className="glow-box-content p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="text-[#34c3eb]" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glow-box">
              <div className="glow-box-content p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="text-[#34c3eb]" />
                  Machine Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glow-box">
              <div className="glow-box-content p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Database className="text-[#34c3eb]" />
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glow-box">
              <div className="glow-box-content p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Cloud className="text-[#34c3eb]" />
                  Tools & Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.tools, ...skills.databases].map((skill, i) => (
                    <span key={i} className="px-4 py-2 rounded-full skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cyber-text">Certifications</h2>
          <div className="glow-box">
            <div className="glow-box-content p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ExternalLink className="text-[#34c3eb] flex-shrink-0" size={20} />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 cyber-text">Let's Connect</h2>
          <div className="glow-box">
            <div className="glow-box-content p-8">
              <p className="text-lg text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="mailto:nipunnirman999@gmail.com" 
                   className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all">
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/nipun-rathnayaka-889714250/" 
                   target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all">
                  LinkedIn
                </a>
                <a href="https://github.com/nipunnirman" 
                   target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-[#34c3eb]/10 border border-[#34c3eb] rounded-lg hover:bg-[#34c3eb]/20 transition-all">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2026 Nipun Nirman Rathnayaka. Built with React.</p>
          <p className="text-sm mt-2">University of Westminster | BSc (Hons) Computer Science</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;