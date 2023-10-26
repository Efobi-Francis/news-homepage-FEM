/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1440px'
    },
    fontFamily: {
      'inter-bold': ['Inter-Bold', 'Georgia'],
      'inter-extrabold': ['Inter-ExtraBold', 'Georgia'],
      'inter-regular': ['Inter-Regular', 'Georgia']
    },
    extend: {},
  },
  plugins: [],
}
