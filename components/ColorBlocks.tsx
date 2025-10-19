import React from 'react';

const blocks = [
  {
    className: 'bg-purple-600/20 w-40 h-40 top-[15%] left-[10%] -rotate-12 animate-pulse',
    style: { animationDelay: '0s' },
  },
  {
    className: 'bg-pink-500/20 w-32 h-32 top-[20%] right-[15%] rotate-6 animate-pulse',
    style: { animationDelay: '0.5s' },
  },
  {
    className: 'bg-blue-500/10 w-52 h-52 top-[60%] left-[20%] rotate-12 animate-pulse',
    style: { animationDelay: '1s' },
  },
  {
    className: 'bg-purple-500/10 w-24 h-24 bottom-[10%] right-[25%] -rotate-6 animate-pulse',
    style: { animationDelay: '1.5s' },
  },
];

const ColorBlocks: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`absolute rounded-3xl filter blur-lg ${block.className}`}
          style={block.style}
        />
      ))}
    </div>
  );
};

export default ColorBlocks;
