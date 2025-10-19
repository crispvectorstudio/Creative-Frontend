import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const CheckIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mr-3 flex-shrink-0 text-purple-400" 
        viewBox="0 0 20 20" 
        fill="currentColor"
    >
        <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clipRule="evenodd" 
        />
    </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative h-full rounded-xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:bg-slate-800/80 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20">
      <div className="flex flex-col h-full">
        <div>
            <h3 className="text-2xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-md font-semibold text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mb-4">
                {project.subtitle}
            </p>
            <ul className="space-y-3 text-gray-400 mb-6">
            {project.descriptionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span>{point}</span>
                </li>
            ))}
            </ul>
        </div>
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block rounded-full bg-slate-700/80 px-3 py-1 text-xs font-medium text-gray-300 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;