import { CSSProperties, ReactNode } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import resolveConfig from 'tailwindcss/resolveConfig'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import tailwindConfig from 'tailwind.config'

const config = resolveConfig(tailwindConfig)
const tailwindTheme: any = config.theme
// TODO Add tailwind font into mui programmatically

declare module '@mui/material/styles' {
  interface TypographyVariants {
    regular11: CSSProperties
    medium11: CSSProperties
    regular13: CSSProperties
    medium13: CSSProperties
    bold13: CSSProperties
    light15: CSSProperties
    regular15: CSSProperties
    medium15: CSSProperties
    bold15: CSSProperties
    light17: CSSProperties
    regular17: CSSProperties
    buttonLarge: CSSProperties
    buttonSmall: CSSProperties
    inputLarge: CSSProperties
    inputSmall: CSSProperties
  }
  interface TypographyVariantsOptions {
    regular11?: CSSProperties
    medium11?: CSSProperties
    regular13?: CSSProperties
    medium13?: CSSProperties
    bold13?: CSSProperties
    light15?: CSSProperties
    regular15?: CSSProperties
    medium15?: CSSProperties
    bold15?: CSSProperties
    light17?: CSSProperties
    regular17?: CSSProperties
    buttonLarge?: CSSProperties
    buttonSmall?: CSSProperties
    inputLarge?: CSSProperties
    inputSmall?: CSSProperties
  }
  interface Palette {
    primaryAlt: Palette['primary']
    disabled: Palette['primary']
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    primaryAlt: PaletteOptions['primary']
    disabled: PaletteOptions['primary']
    neutral: PaletteOptions['primary']
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    regular11: true
    medium11: true
    regular13: true
    medium13: true
    bold13: true
    light15: true
    regular15: true
    medium15: true
    bold15: true
    light17: true
    regular17: true
    buttonLarge: true
    buttonSmall: true
    inputLarge: true
    inputSmall: true
  }
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    primaryAlt: true
    disabled: true
    neutral: true
  }
}

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: tailwindTheme.colors.primary.DEFAULT,
      dark: tailwindTheme.colors.primary.hover,
      light: tailwindTheme.colors.primary.light,
      contrastText: tailwindTheme.colors.text.button,
    },
    secondary: {
      main: tailwindTheme.colors.secondary.DEFAULT,
      dark: tailwindTheme.colors.secondary.hover,
      light: tailwindTheme.colors.secondary.light,
      contrastText: tailwindTheme.colors.text.button,
    },
    error: {
      main: tailwindTheme.colors.error.DEFAULT,
      light: tailwindTheme.colors.error.light,
      dark: tailwindTheme.colors.error.dark,
    },
    neutral: {
      main: tailwindTheme.colors.text.light,
    },
    primaryAlt: {
      main: tailwindTheme.colors.text.button,
    },
    disabled: {
      main: tailwindTheme.colors.disabled.surface,
    },
  },
  typography: {
    fontFamily: 'IRANSansX',
    regular11: {
      fontSize: tailwindTheme.fontSize.regular11[0],
      fontWeight: tailwindTheme.fontSize.regular11[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular11[1].lineHeight,
    },
    medium11: {
      fontSize: tailwindTheme.fontSize.medium11[0],
      fontWeight: tailwindTheme.fontSize.medium11[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium11[1].lineHeight,
    },
    regular13: {
      fontSize: tailwindTheme.fontSize.regular13[0],
      fontWeight: tailwindTheme.fontSize.regular13[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium11[1].lineHeight,
    },
    medium13: {
      fontSize: tailwindTheme.fontSize.medium13[0],
      fontWeight: tailwindTheme.fontSize.medium13[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium13[1].lineHeight,
    },
    bold13: {
      fontSize: tailwindTheme.fontSize.bold13[0],
      fontWeight: tailwindTheme.fontSize.bold13[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold13[1].lineHeight,
    },
    light15: {
      fontSize: tailwindTheme.fontSize.light15[0],
      fontWeight: tailwindTheme.fontSize.light15[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light15[1].lineHeight,
    },
    regular15: {
      fontSize: tailwindTheme.fontSize.regular15[0],
      fontWeight: tailwindTheme.fontSize.regular15[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular15[1].lineHeight,
    },
    medium15: {
      fontSize: tailwindTheme.fontSize.medium15[0],
      fontWeight: tailwindTheme.fontSize.medium15[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.medium15[1].lineHeight,
    },
    bold15: {
      fontSize: tailwindTheme.fontSize.bold15[0],
      fontWeight: tailwindTheme.fontSize.bold15[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.bold15[1].lineHeight,
    },
    light17: {
      fontSize: tailwindTheme.fontSize.light17[0],
      fontWeight: tailwindTheme.fontSize.light17[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.light17[1].lineHeight,
    },
    regular17: {
      fontSize: tailwindTheme.fontSize.regular17[0],
      fontWeight: tailwindTheme.fontSize.regular17[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.regular17[1].lineHeight,
    },
    h1: {
      fontSize: tailwindTheme.fontSize.h1[0],
      fontWeight: tailwindTheme.fontSize.h1[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.h1[1].lineHeight,
    },
    h2: {
      fontSize: tailwindTheme.fontSize.h2[0],
      fontWeight: tailwindTheme.fontSize.h2[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.h2[1].lineHeight,
    },
    h3: {
      fontSize: tailwindTheme.fontSize.h3[0],
      fontWeight: tailwindTheme.fontSize.h3[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.h3[1].lineHeight,
    },
    h4: {
      fontSize: tailwindTheme.fontSize.h4[0],
      fontWeight: tailwindTheme.fontSize.h4[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.h4[1].lineHeight,
    },
    h5: {
      fontSize: tailwindTheme.fontSize.h5[0],
      fontWeight: tailwindTheme.fontSize.h5[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.h5[1].lineHeight,
    },
    h6: {
      fontSize: tailwindTheme.fontSize.h6[0],
      fontWeight: tailwindTheme.fontSize.h6[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.h6[1].lineHeight,
    },
    buttonLarge: {
      fontSize: tailwindTheme.fontSize.buttonLarge[0],
      fontWeight: tailwindTheme.fontSize.buttonLarge[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.buttonLarge[1].lineHeight,
    },
    buttonSmall: {
      fontSize: tailwindTheme.fontSize.buttonSmall[0],
      fontWeight: tailwindTheme.fontSize.buttonSmall[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.buttonSmall[1].lineHeight,
    },
    inputLarge: {
      fontSize: tailwindTheme.fontSize.inputLarge[0],
      fontWeight: tailwindTheme.fontSize.inputLarge[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.inputLarge[1].lineHeight,
    },
    inputSmall: {
      fontSize: tailwindTheme.fontSize.inputSmall[0],
      fontWeight: tailwindTheme.fontSize.inputSmall[1].fontWeight,
      lineHeight: tailwindTheme.fontSize.inputSmall[1].lineHeight,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 56,
        },
        sizeMedium: {
          height: 48,
        },
        sizeSmall: {
          height: 40,
        },
        startIcon: {
          margin: 0,
        },
        endIcon: {
          margin: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        notchedOutline: {
          borderColor: tailwindTheme.colors.border.darkest,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 125,
          height: 45,
          padding: 3,
          '& .MuiSwitch-switchBase': {
            padding: 5,
            transform: 'translateX(40px)',
            '&.Mui-checked': {
              color: '#fff !important',
              transform: 'translateX(0px)',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: tailwindTheme.colors.primary.DEFAULT,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: tailwindTheme.colors.background.surface,
            width: 75,
            height: 35,
            borderRadius: '20px !important',

            '&:before': {
              color: 'black',
              fontSize: '12px',
              position: 'absolute',
              left: '50%',
              top: '50%',
              textAlign: 'center',
              transform: 'translate(-50%,-50%)',
            },
          },
          '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: tailwindTheme.colors.disabled.text,
            borderRadius: 20,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#fff',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#0000000a',
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
  },
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  )
}

export default ThemeProvider
