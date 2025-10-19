import React from 'react';
import AnimatedGrid from './AnimatedGrid';

const Header: React.FC = () => {
  return (
    <header className="relative py-20 sm:py-32 text-center">
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 blur-sm">
        <AnimatedGrid />
      </div>
      
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
        <span 
          className="block animate-fade-in-up" 
          style={{ opacity: 0, animationDelay: '0.2s' }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-text-gradient bg-[200%_auto]">
            Creative Frontend
          </span>
        </span>
        <span 
          className="block animate-fade-in-up" 
          style={{ opacity: 0, animationDelay: '0.4s' }}
        >
          Developer
        </span>
      </h1>
      
      <p 
        className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 animate-fade-in-up"
        style={{ animationDelay: '0.6s', opacity: 0 }}
      >
        I blend design and technology to craft beautiful, interactive, and high-performance web experiences.
      </p>
    </header>
  );
};

export default Header;