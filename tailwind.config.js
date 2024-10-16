/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Karla', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-light-green': 'hsl(148, 38%, 91%)',
        'primary-medium-green': 'hsl(169, 82%, 27%)',
        'primary-red': 'hsl(0, 66%, 54%)',

        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-medium-grey': 'hsl(186, 15%, 59%)',
        'neutral-darker-grey': 'hsl(187, 24%, 22%)',
      },

    },
  },
  plugins: [],
}

