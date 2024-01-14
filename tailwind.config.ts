import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './kd-components/**/*.{js,ts,jsx,tsx,mdx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontSize: {
      regular11: [
        '0.688rem',
        {
          fontWeight: '300',
          lineHeight: '17px',
        },
      ],
      medium11: [
        '0.688rem',
        {
          fontWeight: '500',
          lineHeight: '18px',
        },
      ],
      regular13: [
        '0.813rem',
        {
          fontWeight: '300',
          lineHeight: '20px',
        },
      ],
      medium13: [
        '0.813rem',
        {
          fontWeight: '400',
          lineHeight: '20px',
        },
      ],
      bold13: [
        '0.813rem',
        {
          fontWeight: '700',
          lineHeight: '20px',
        },
      ],
      light15: [
        '0.938rem',
        {
          fontWeight: '200',
          lineHeight: '23px',
        },
      ],
      regular15: [
        '0.938rem',
        {
          fontWeight: '300',
          lineHeight: '23px',
        },
      ],
      medium15: [
        '0.938rem',
        {
          fontWeight: '400',
          lineHeight: '23px',
        },
      ],
      bold15: [
        '0.938rem',
        {
          fontWeight: '700',
          lineHeight: '23px',
        },
      ],
      light17: [
        '1.063rem',
        {
          fontWeight: '200',
          lineHeight: '26px',
        },
      ],
      regular17: [
        '1.063rem',
        {
          fontWeight: '300',
          lineHeight: '26px',
        },
      ],
      h1: [
        '1.688rem',
        {
          fontWeight: '700',
          lineHeight: '41px',
        },
      ],
      h2: [
        '1.688rem',
        {
          fontWeight: '400',
          lineHeight: '41px',
        },
      ],
      h3: [
        '1.563rem',
        {
          fontWeight: '700',
          lineHeight: '38px',
        },
      ],
      h4: [
        '1.438rem',
        {
          fontWeight: '700',
          lineHeight: '35px',
        },
      ],
      h5: [
        '1.313rem',
        {
          fontWeight: '700',
          lineHeight: '35px',
        },
      ],
      h6: [
        '1.063rem',
        {
          fontWeight: '700',
          lineHeight: '26px',
        },
      ],
      buttonLarge: [
        '0.938rem',
        {
          fontWeight: '700',
          lineHeight: '23px',
        },
      ],
      buttonSmall: [
        '0.813rem',
        {
          fontWeight: '700',
          lineHeight: '20px',
        },
      ],
      inputLarge: [
        '0.938rem',
        {
          fontWeight: '400',
          lineHeight: '23px',
        },
      ],
      inputSmall: [
        '0.813rem',
        {
          fontWeight: '400',
          lineHeight: '20px',
        },
      ],
    },
    colors: {
      primary: {
        DEFAULT: '#0087e0',
        lightest: '#caf5fd',
        lighter: '#62ccf5',
        darker: '#004ea1',
        darkest: '#00276b',
        click: '#005994',
        hover: '#0078c7',
      },
      secondary: {
        DEFAULT: '#21d5b0',
        lightest: '#d2fce3',
        lighter: '#77f2c1',
        darker: '#109997',
        darkest: '#065566',
        click: '#158a72',
        hover: '#1dbd9c',
      },
      background: {
        DEFAULT: '#f2f5fa',
        surface: '#ffffff',
        tint1: '#f7f8fa',
        transparent: '#ffffff',
      },
      disabled: {
        text: '#b6b8bf',
        background: '#dadce5',
        surface: '#edf3fa',
      },
      text: {
        DEFAULT: '#11131f',
        dark: '#494c69',
        middle: '#6d729c',
        light: '#8f97b2',
        button: '#ffffff',
        tertiary: '#969696',
      },
      border: {
        darkest: '#14151a80',
        dark: '#14151a26',
        mid: '#14151a1a',
        light: '#14151a0d',
      },
      error: {
        DEFAULT: '#ff334b',
        light: '#ffe5e6',
        dark: '#d92b40',
      },
      success: {
        DEFAULT: '#11c27a',
        light: '#ccffe7',
        dark: '#0fa668',
      },
      warning: {
        DEFAULT: '#dbcd04',
        light: '#fff5cc',
        dark: '#db8e00',
      },
      info: {
        DEFAULT: '#14a6e0',
        light: '#e8f3fc',
        dark: '#118ebf',
      },
      neutral: {
        100: '#303033',
        80: '#49494d',
        60: '#797a80',
        40: '#aaabb2',
        20: '#dadce5',
        0: '#eef0fa',
      },
      visualization: {
        'light-red': '#fc5c65',
        'dark-red': '#eb3b5a',
        'darkest-red': '#99263b',
        'light-orange': '#fd9644',
        'dark-orange': '#fa8231',
        'darkest-orange': '#b25d23',
        'light-yellow': '#fed330',
        'dark-yellow': '#f7b731',
        'darkest-yellow': '#cc9728',
        'light-green': '#26de81',
        'dark-green': '#20bf6b',
        'darkest-green': '#178c4f',
        'light-tiffany': '#2bcbba',
        'dark-tiffany': '#0fb9b1',
        'darkest-tiffany': '#0a807a',
        'light-blue': '#45aaf2',
        'dark-blue': '#2d98da',
        'darkest-blue': '#2374a6',
        'light-violet': '#a55eea',
        'dark-violet': '#8854d0',
        'darkest-violet': '#643e99',
        'light-crayola': '#4b7bec',
        'dark-crayola': '#3867d6',
        'darkest-crayola': '#2b50a6',
      },
      neshan: { primary: '#00276b' },
    },
    boxShadow: {
      lottie: '0 15px 25px 0 rgba(150, 150, 150, 0.2)',
    },
  },

  plugins: [],
}
export default config
