/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'paper-white': '#fdfaf6',
        'paper-cream': '#fefce8',
        'ink-black': '#1f2937',
        'paper-brown': 'var(--paper-brown)',
        'doodle-blue': 'var(--doodle-blue)',
      },
      fontFamily: {
        sans: ['var(--font-patrick-hand)', 'cursive'],
        riitn: ['var(--font-riitn)', 'cursive'],
        formal: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float-doodle 4s ease-in-out infinite',
      },
      keyframes: {
        'float-doodle': {
          '0%, 100%': { transform: 'translateY(0) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
}

