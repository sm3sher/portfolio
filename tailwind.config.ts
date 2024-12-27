import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'infinite-scroll': 'scroll 50s linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  },
} satisfies Config;
