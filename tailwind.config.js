module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xxs': '15rem',
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      colors: {
        cyan: {
          100: '#00FEDB'
        },
      }
    },
  },
  plugins: [],
}
