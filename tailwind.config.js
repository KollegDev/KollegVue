module.exports = {
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Roboto'],
    },
    extend: {
      colors: {
        white: "#E0E0E0",
        black: "#202125",
        light: "#F87171",
        dark: "#A78BFA",
        darkgrey: "#25262B"
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwind-scrollbar-hide')
  ],
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
