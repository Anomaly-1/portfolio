import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.5)' }, // blue-500
          '50%': { boxShadow: '0 0 20px 4px rgba(59, 130, 246, 0.8)' },
        },
        'holographic-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(234, 179, 8, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
            borderColor: 'rgba(234, 179, 8, 0.4)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(234, 179, 8, 0.5), 0 0 60px rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(234, 179, 8, 0.6)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(234, 179, 8, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
            borderColor: 'rgba(234, 179, 8, 0.4)'
          },
        },
        'timeline-slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px) translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) translateY(0)',
          },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(234, 179, 8, 0.3)',
            opacity: '0.8'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(234, 179, 8, 0.6)',
            opacity: '1'
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
        'holographic-glow': 'holographic-glow 3s ease-in-out infinite',
        'timeline-slide-in': 'timeline-slide-in 0.6s ease-out',
        'scale-up': 'scale-up 0.4s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
