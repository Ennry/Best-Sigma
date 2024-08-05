/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-hebrew': ['Noto Sans Hebrew', 'sans-serif'],
      },
      colors: {
        'main': "#fbf3db",
        'primary': "#2E4B37",
        'secondary': "#F7E7B6",
        'modal': "#EBC970",
        'button': "#2fbf71",
        'secondary-button': "#8cd867",
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 15s linear infinite',
      },
    },
  },
  plugins: [],
}

