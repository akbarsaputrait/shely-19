module.exports = {
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      'blue-sky': {
        50: '#F9FDFE',
        100: '#F3FAFD',
        200: '#E1F3FA',
        300: '#CFEBF7',
        400: '#ABDDF1',
        500: '#87CEEB',
        600: '#7AB9D4',
        700: '#517C8D',
        800: '#3D5D6A',
        900: '#293E47',
      },
    }
  }
}
