import React from 'react';

const GRID_WIDTH = 20;
const GRID_HEIGHT = 10;

const AnimatedGrid: React.FC = () => {
    const dots = [];
    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="animate-scale-in rounded-sm"
                    key={`${i}-${j}`}
                    style={{
                        animationDelay: `${(i * 0.05) + (j * 0.05)}s`,
                        opacity: 0,
                        backgroundColor: 'rgba(124, 58, 237, 0.4)', // purple-600 with opacity
                    }}
                ></div>
            );
        }
    }

    return (
        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
                width: `${GRID_WIDTH * 1.5}rem`,
                height: `${GRID_HEIGHT * 1.5}rem`,
            }}
        >
            <div 
                className="grid w-full h-full"
                style={{
                    gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_HEIGHT}, 1fr)`,
                    gap: '0.5rem',
                }}
            >
                {dots}
            </div>
        </div>
    );
};

export default AnimatedGrid;