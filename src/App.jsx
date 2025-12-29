import React, { useState } from 'react';
import { PORTFOLIO_DATA } from './constants';
import './index.css';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              {PORTFOLIO_DATA.name.split(' ')[0]}
            </button>
            
            <div className="flex gap-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-all duration-300 pb-1 ${
                    activeNav === item
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
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
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-blue-50 to-transparent"
      >
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{PORTFOLIO_DATA.name}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">{PORTFOLIO_DATA.title}</p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">{PORTFOLIO_DATA.bio}</p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.003 12.003 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.746 0-9.637h3.554v1.364c.429-.659 1.196-1.595 2.905-1.595 2.12 0 3.71 1.386 3.71 4.365v5.503zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.712 0-.951.768-1.711 1.96-1.711 1.19 0 1.912.76 1.938 1.711 0 .951-.748 1.712-1.983 1.712zm1.946 11.597H3.392V9.815h3.891v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{PORTFOLIO_DATA.about.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.about.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center text-sm font-medium text-gray-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      Live →
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.College}</h3>
                  <span className="text-sm text-gray-500">{exp.Branch}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.Academicyear}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-600 mb-12">Have a project in mind? Let's create something amazing together.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
              <div className="text-2xl mb-2">📧</div>
              <p className="text-sm text-gray-600">{PORTFOLIO_DATA.email}</p>
              <p className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors mt-2">Send Email</p>
            </a>
            <a href={`tel:${PORTFOLIO_DATA.phone}`} className="p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
              <div className="text-2xl mb-2">📱</div>
              <p className="text-sm text-gray-600">{PORTFOLIO_DATA.phone}</p>
              <p className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors mt-2">Call Me</p>
            </a>
            <div className="p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-sm text-gray-600">{PORTFOLIO_DATA.location}</p>
              <p className="text-xs text-gray-400 mt-2">Based Here</p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${PORTFOLIO_DATA.email}`;
          }}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p>&copy; 2024 {PORTFOLIO_DATA.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
