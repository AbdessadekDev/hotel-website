/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        moroccan: {
          gold: '#D4AF37', // Rich gold
          terracotta: '#E2725B', // Warm terracotta
          turquoise: '#40E0D0', // Vibrant turquoise
          deepBlue: '#1B3B6F', // Deep Moroccan blue
          cream: '#FFF4E1', // Soft neutral background
          sand: '#C2B280', // Muted earthy tone
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

