
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto text-center py-8 mt-16 border-t border-white/10">
      <p className="text-gray-500">
        Built with React & Tailwind CSS. © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
