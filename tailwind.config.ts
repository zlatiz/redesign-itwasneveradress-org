import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b9fc',
          400: '#8193f8',
          500: '#636ef1',
          600: '#4f4ce5',
          700: '#423bca',
          800: '#1a2744',
          900: '#0f172a',
          950: '#080d1a',
        },
        accent: {
          cyan: '#22d3ee',
          teal: '#14b8a6',
          blue: '#0ea5e9',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #0a1628 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(30, 58, 95, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
        'stats-gradient': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;