/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F5F0',
        'primary': '#F5DFBD',
        'text': '#121212',
        'accent-light': '#F8E5C0',
        'neutral-dark': '#121212',
        'neutral-gray': '#6c757d',
        'neutral-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
        satoshi: ['Satoshi', 'sans-serif'],
        chillax: ['Chillax', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['48px', { lineHeight: '100%', letterSpacing: '2%' }],
      },
      letterSpacing: {
        '2%': '0.02em',
      },
      lineHeight: {
        'full': '100%',
      },
    },
  },
  plugins: [],
}

