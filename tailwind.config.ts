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
        navy: {
          900: '#050a15',
          800: '#0a1628',
          700: '#0f1f3a',
          600: '#152a4d',
          500: '#1a3a5c',
          400: '#1e4a70',
        },
        brand: {
          blue: '#3b82f6',
          lightBlue: '#60a5fa',
          accent: '#2563eb',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #050a15 0%, #0f1f3a 50%, #1a3a5c 100%)',
        'stats-gradient': 'linear-gradient(180deg, #0a1628 0%, #050a15 100%)',
      },
    },
  },
  plugins: [],
};

export default config;