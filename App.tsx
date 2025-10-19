import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ColorBlocks from './components/ColorBlocks';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-900 font-sans text-gray-200">
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      
      <ColorBlocks />

      <main className="relative z-10 flex flex-col items-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-5xl mx-auto">
          <Header />
          
          <section id="projects" className="py-16 sm:py-24">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fade-in-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {PROJECTS.map((project: Project, index: number) => (
                <div 
                  key={project.id} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${0.6 + index * 0.2}s`, opacity: 0 }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>

          <Contact />

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;