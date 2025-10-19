
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Chroma Studio',
    subtitle: 'Landing Page',
    descriptionPoints: [
      'Designed a full-screen animated hero with logo reveal through a gradient color wipe.',
      'Created a dynamic grid of color blocks that animate on scroll with staggered timing.',
      'Utilized Tailwind CSS for rapid layout and GSAP ScrollTrigger for silky motion.',
      'Optimized for mobile with reduced repaints and lazy-loaded animations.',
      'Achieved an “editorial but energetic” vibe, leading to a brand refresh contract.',
    ],
    tags: ['GSAP', 'SVG Masks', 'Tailwind CSS', 'ScrollTrigger', 'UI/UX'],
  },
  {
    id: 2,
    title: 'Form & Hue',
    subtitle: 'Design Agency',
    descriptionPoints: [
      'Built a minimalist one-pager with animated typography and floating color panels.',
      'Implemented hover-triggered transitions on image cards (color overlay + scale).',
      'Ensured full responsiveness across all major desktop and mobile browsers.',
      'Achieved a final Lighthouse score of 95+ in Performance and 100 in UX.',
      'Proposed animation concepts early, refined easing curves, and delivered CMS-ready code.',
    ],
    tags: ['Responsive Design', 'Typography', 'Transitions', 'Lighthouse', 'Performance'],
  },
];
