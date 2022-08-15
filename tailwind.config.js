module.exports = {
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      catamaran: ['Catamaran', 'sans-serif'],
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '920px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1536px'},
    },
    extend: {
      colors: {
        'gray-fb': '#FBFBFB',
        'gray-40': '#404040',
        'gray-ed': '#EDEDED',
        'gray-f3': '#F3F3F3',
        'gray-9e': '#9E9E9E',
        'gray-75': '#757575',
        'red-f4': '#F44336',
        'blue-33': '#3386FF',
        'brown-b5': '#B54B0F',
      },
      backgroundImage: {
        'gradientRed': 'linear-gradient(180deg, #EE3C45 0%, #AE0D15 100%)',
      },
    },
    variants: {},
    plugins: [],
  },
};