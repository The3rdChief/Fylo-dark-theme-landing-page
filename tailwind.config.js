/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      intro_email_bg: 'hsl(217, 28%, 15%)',
      main_bg: 'hsl(218, 28%, 13%)',
      footer_bg: '#0b1523',
      testimonials_bg: '#202a3c',
      cyan: 'hsl(176, 68%, 64%)',
      blue: 'hsl(198, 60%, 50%)',
      light_red: 'hsl(0, 100%, 63%)',
      white: 'hsl(0, 0%, 100%)',
      gray: '#b2b9c2',
    },
    fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        open_sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
    },
  plugins: [],
}
}

