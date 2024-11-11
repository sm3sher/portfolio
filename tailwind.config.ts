import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
