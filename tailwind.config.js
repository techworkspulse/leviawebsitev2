/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        AquaLight: 'Aquawax-Light-Trial, Open Sans',
        AquaMedium: 'Aquawax-Medium-Trial, Open Sans',
        Avenir: 'Avenir, Open Sans',
        Avgard: 'AVGARDD_2, Open Sans',
        Avgardn: 'AVGARDN_2, Open Sans',
        Baskerville: 'Baskerville, Open Sans',
        ButlerBold: 'Butler_Bold',
        GothamMedium: 'Gotham-Medium',
        GothamBook: 'GothamBook',
        OpensansBold: 'OpenSans-Bold',
        OpensansBoldItalic: 'OpenSans-BoldItalic',
        OpensansBoldItalic: 'OpenSans-ExtraBoldItalic',
        OpensansItalic: 'OpenSans-Italic',
        OpensansRegular: 'OpenSans-Regular',
        OpensansSemibold: 'OpenSans-Semibold',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

