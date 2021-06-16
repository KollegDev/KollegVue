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
        dark: "#F87171",
        darkgrey: "#25262B"
      }
    },
    flexGrow: {
      DEFAULT: 1,
      '0': 0,
      '1': 1,
      '4': 4.3,
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-dark-mode')()
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
