/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'dark',
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1450px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
      black: '#000',




      primary: '#b39063',
      'primary-lighter': '#2d2a25',
      
      dark: '#171717',
      'dark-alpha': '#232323',
      'dark-beta': '#1e1e1e',

      // mehdi
      'dark-tetha': '#121212',
      'dark-gamma': '#1c1c1c',
      'primary-dark': '#201e1b',
      // mehdi


      light: '#747474',
      lighter: '#a2a2a2',
    },
    fontSize: {
      '3xs': '8px',
      '2xs': '10px',
      xs: '12px',
      '2sm': '13px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '11xl': '42px',
      '12xl': '44px',
      '13xl': '46px',
      '14xl': '48px',
      '15xl': '50px',
      '20xl': '60px',
    },

    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '900',
    },
    boxShadow: {
      'xl': '0px 20px 100px 0px rgba(179, 144, 99, 0.3)',
      'sm':'7.66px 6.428px 100px 0px rgba(0, 0, 0, 0.15)'
    }
    
  },
  plugins: [],
}
