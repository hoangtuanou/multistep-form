/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'var(--marine-blue)',
        'light-blue': 'var(--light-blue)',
        magnolia: 'var(--magnolia)',
        gray: 'var(--cool-gray)',
        'purplish-blue': 'var(--purplish-blue)',
        'pastel-blue': 'var(--pastel-blue)',
        'light-pastel-blue': 'var(--light-pastel-blue)',
        'light-gray': 'var(--light-gray)',
        'strawberry-red': 'var(--strawberry-red)',
      },
      flex: {
        2: '2 2 0%',
      },
    },
    fontFamily: {
      ubuntu: ['Ubuntu-Regular', 'Arial', 'sans-serif'],
      'ubuntu-medium': ['Ubuntu-Medium', 'Arial', 'sans-serif'],
      'ubuntu-bold': ['Ubuntu-Bold', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
