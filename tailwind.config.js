/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: '#f4edd9',
          100: '#e3d7ae',
          200: '#d1c187',
          300: '#bda25a', // Base color
          400: '#9f8a4d',
          500: '#846f3c',
          600: '#6b592f',
          700: '#554525',
          800: '#3f321b',
          900: '#2c2212',
        },
        gray: {
          50: '#e5e5e4',
          100: '#cfcfce',
          200: '#b4b4b3',
          300: '#9c9c9b',
          400: '#828281',
          500: '#4a4a49', // Base color
          600: '#3d3d3c',
          700: '#323231',
          800: '#272726',
          900: '#1d1d1c',
        }
      },
    },
  },
  plugins: [],
};
