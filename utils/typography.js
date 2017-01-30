import Typography from 'typography';

// @TODO: publish as typography theme
// @TODO: import media_query constants
// @TODO: responsive font sizes - create a loop?
// @TODO: button plugin for typographyjs?

const MEDIA = {
  MOBILE: '@media (min-width: 30em)',
  TABLET: '@media (min-width: 48em)',
  LAPTOP: '@media (min-width: 62em)',
  DISPLAY: '@media (min-width: 75em)',
  DISPLAY_L: '@media (min-width: 100em)',
  DISPLAY_XL: '@media (min-width: 125em)'
};

const options = {
  baseFontSize: '15px',
  baseLineHeight: '25px',
  modularScales: [
    {
      scale: 'golden'
    }
  ],
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '500',
        '500i',
        '700',
        '700i'
      ]
    },
    {
      name: 'Montserrat',
      styles: [
        '400',
        '700'
      ]
    }
  ],
  headerFontFamily: ['"Ubuntu"', '"Open Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['"Montserrat"', '"Open Sans"', '"Helvetica Neue"','Helvetica', 'Arial', 'sans-serif'],
  headerGray: 0,
  bodyGray: 0,
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: '1.66667rem',
  overrideStyles: ({ rhythm, adjustFontSizeToMSValue }, options, styles) => ({
    'h1, h2, h3, h4, h5, h6': {
      margin: '0 auto',
      marginBottom: rhythm(1)
    },
    h1: {
      ...adjustFontSizeToMSValue(2)
    },
    h2: {
      ...adjustFontSizeToMSValue(1.5)
    },
    h3: {
      ...adjustFontSizeToMSValue(1)
    },
    h4: {
      ...adjustFontSizeToMSValue(.75)
    },
    h5: {
      ...adjustFontSizeToMSValue(.5)
    },
    h6: {
      ...adjustFontSizeToMSValue(.25)
    },
    [MEDIA.MOBILE]: {
      h1: {
        ...adjustFontSizeToMSValue(2.25)
      },
      h2: {
        ...adjustFontSizeToMSValue(1.75)
      },
      h3: {
        ...adjustFontSizeToMSValue(1.25)
      },
      h4: {
        ...adjustFontSizeToMSValue(1)
      },
      h5: {
        ...adjustFontSizeToMSValue(.75)
      },
      h6: {
        ...adjustFontSizeToMSValue(.5)
      },
      body: {
        ...adjustFontSizeToMSValue(.05)
      }
    },
    [MEDIA.TABLET]: {
      h1: {
        ...adjustFontSizeToMSValue(2.5)
      },
      h2: {
        ...adjustFontSizeToMSValue(2)
      },
      h3: {
        ...adjustFontSizeToMSValue(1.5)
      },
      h4: {
        ...adjustFontSizeToMSValue(1.25)
      },
      h5: {
        ...adjustFontSizeToMSValue(1)
      },
      h6: {
        ...adjustFontSizeToMSValue(.75)
      },
      body: {
        ...adjustFontSizeToMSValue(.1)
      }
    },
    [MEDIA.LAPTOP]: {
      h1: {
        ...adjustFontSizeToMSValue(2.75)
      },
      h2: {
        ...adjustFontSizeToMSValue(2.25)
      },
      h3: {
        ...adjustFontSizeToMSValue(1.75)
      },
      h4: {
        ...adjustFontSizeToMSValue(1.5)
      },
      h5: {
        ...adjustFontSizeToMSValue(1.25)
      },
      h6: {
        ...adjustFontSizeToMSValue(1)
      },
      body: {
        ...adjustFontSizeToMSValue(.15)
      }
    },
    [MEDIA.DISPLAY]: {
      h1: {
        ...adjustFontSizeToMSValue(3)
      },
      h2: {
        ...adjustFontSizeToMSValue(2.5)
      },
      h3: {
        ...adjustFontSizeToMSValue(2)
      },
      h4: {
        ...adjustFontSizeToMSValue(1.75)
      },
      h5: {
        ...adjustFontSizeToMSValue(1.5)
      },
      h6: {
        ...adjustFontSizeToMSValue(1.25)
      },
      body: {
        ...adjustFontSizeToMSValue(.20)
      }
    },
    [MEDIA.DISPLAY_L]: {
      h1: {
        ...adjustFontSizeToMSValue(3.25)
      },
      h2: {
        ...adjustFontSizeToMSValue(2.75)
      },
      h3: {
        ...adjustFontSizeToMSValue(2.25)
      },
      h4: {
        ...adjustFontSizeToMSValue(2)
      },
      h5: {
        ...adjustFontSizeToMSValue(1.75)
      },
      h6: {
        ...adjustFontSizeToMSValue(1.5)
      },
      body: {
        ...adjustFontSizeToMSValue(.25)
      }
    },
    [MEDIA.DISPLAY_XL]: {
      h1: {
        ...adjustFontSizeToMSValue(3.5)
      },
      h2: {
        ...adjustFontSizeToMSValue(3)
      },
      h3: {
        ...adjustFontSizeToMSValue(2.5)
      },
      h4: {
        ...adjustFontSizeToMSValue(2.25)
      },
      h5: {
        ...adjustFontSizeToMSValue(2)
      },
      h6: {
        ...adjustFontSizeToMSValue(1.75)
      },
      body: {
        ...adjustFontSizeToMSValue(.30)
      }
    },
    a: {
      color: '#ff995e',
      fontSize: 'inerit',
      fontWeight: 'inherit',
      textDecoration: 'none',
      transition: 'color 250ms'
    },
    'a:hover': {
      color: '#ff865e',
      textDecoration: 'underline'
    }
  })
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
