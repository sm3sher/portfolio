import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'infinite-scroll': 'scroll 50s linear infinite',
        'rocket-lift': 'rocket-lift-frames 1s forwards',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(-50%)',
          },
        },
        'rocket-lift-frames': {
          '0%': {
            transform: 'rotate(0)',
          },
          '50%': {
            transform: 'rotate(-45deg)',
          },
          '100%': {
            transform: 'translateY(-10px) rotate(-45deg) ',
          },
        },
      },
    },
  },
} satisfies Config;
