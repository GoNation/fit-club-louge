// ChakraStylingConfig.js
export const hpSideBySideImageConfig = {
  reversed: true,
  multiFontConfig: {
    active: false,
  },
  sideBySideImageContainerStyle: {
    bg: 'light',

    py: { base: 4, lg: 32, xl: 40 },
    px: { base: 2, md: '2rem', lg: 4 },
  },
  innerContainer: {
    display: { base: 'block', lg: 'grid' },
    gridTemplateColumns: { lg: 'repeat(2, 1fr)' },
    gap: { base: '0', md: '2rem' },

    alignItems: 'center',
    maxWidth: {
      base: '100%',
      md: '80%',
      lg: '80%',
      xl: '80%',
    },
    m: 'auto',
  },
  contentConfig: {
    showStar: false,
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 8,
      px: ['2rem', 8],
      bg: 'white',
      border: '1px solid white',
      mb: [0, 0, 0, 0],
    },
    titleStyle: {
      color: 'primary',
      fontFamily: 'heading',
      fontSize: { base: '2xl', md: '3xl', lg: '5xl' },
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      zIndex: 1,
      position: 'relative',
      letterSpacing: 4,
    },
    subtitleStyle: {
      color: 'dark',
      fontFamily: 'body',
      fontSize: ['lg', 'xl'],
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    bodyContainerStyle: {
      mb: '1rem',
      mt: 4,
      textAlign: 'center',
      maxWidth: '44rem',
      color: 'white',
      fontSize: 'md',
      my: 8,
      fontWeight: 400,
      fontFamily: 'body',
      color: 'dark',
    },
  },
  imageConfig: {
    size: 1200,

    containerStyle: {
      width: '100%',
      height: [500, 500, 700],
      padding: [8, 0],
      my: [8, 0],
    },
    relativeContainerStyle: {
      position: 'relative',
      height: '100%',
      width: '100%',
    },
    imageStyle: {},
  },
};
