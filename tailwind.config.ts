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
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
