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
        Xero: ["Absolute Xero Regular"],
      },
      colors: {
        darkGrey: '#00171B',
        cyan: '#00FEDB',
        pinkish: '#FE6AF5',
        cyanTriangleLeft: "transparent #00FEDB transparent transparent",
        cyanTriangleRight: " transparent transparent transparent #00FEDB;",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from) 0%, rgba(0, 0, 0, 0) 100%);',
        'gradient-linear': 'linear-gradient(180deg, #00171B 3.31%, #4AEED7 50.61%, rgba(196, 196, 196, 0) 100%);'
      },
      rotate: {
        'minus-12': '-12deg',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
        '160': '37rem',
        '176': '38rem',
        '198': '40rem',
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.275rem'
    }
  },
  plugins: [],
}
