// ChakraStylingConfig.js
export const sideBySideImageConfig = {
  reversed: true,
  multiFontConfig: {
    active: true,
  },
  sideBySideImageContainerStyle: {},

  innerContainer: {
    display: { base: 'block', md: 'grid' },
    gridTemplateColumns: { md: 'repeat(2, 1fr)' },
    gap: { base: '0', md: '2rem' },
    py: { base: '0', md: '7.5rem' },
    px: { md: '1rem' },
    my: { md: '2rem' },
    backgroundColor: 'tertiary',
  },
  contentConfig: {
    showStar: true,

    containerStyle: {
      backgroundColor: 'background',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: '6rem',
      px: ['2rem', 8, 24],
    },
    titleStyle: {
      color: 'dark',
      fontFamily: 'heading',
      fontSize: { base: '4xl', md: '5xl' },
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      zIndex: 1,
      position: 'relative',
      letterSpacing: 4,
    },
    subtitleStyle: {
      color: 'primary',
      fontFamily: 'display',
      fontSize: '2xl',
      textTransform: 'uppercase',
    },
    bodyContainerStyle: {
      fontWeight: 'bold',
      //   my: '1rem',
      mb: '1rem',
      mt: 4,
      textAlign: 'center',
      maxWidth: '44rem',
      color: 'gray.800',
      fontSize: 'base',
    },
  },
  imageConfig: {
    containerStyle: {},
    relativeContainerStyle: {
      position: 'relative',
      height: 'full',
      width: 'full',
    },
    imageStyle: {},
  },
};
