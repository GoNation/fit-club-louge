export const heroConfig = {
  showLogo: false,
  shouldShowPhoneAndDirections: false,
  shouldShowArrow: false,
  video: '/c5.mp4',
  //   videoId: 'sBg2UAHPhVc',

  arrowConfig: {
    wrapper: {
      position: 'absolute',
      zIndex: 10,
      bottom: 0,
      width: 'full',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      background: 'white',
      p: 3,
      px: 12,
      borderTopLeftRadius: '2xl',
      borderTopRightRadius: '3xl',
    },
    iconStyle: {
      fill: 'dark',
      size: 32,
      backgroundColor: 'white',
      cursor: 'pointer',
    },
  },

  // Hero container styles
  heroContainerStyle: {
    position: 'relative',
    height: ['100vh'],

    // background: 'black',
  },

  // Shout container styles
  shoutContainer: {
    marginTop: 8,
  },

  // Shout box styles
  shoutBoxStyle: {
    position: 'absolute',
    zIndex: 10,
    bottom: 48,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  // Phone and directions gradient styles
  phoneDirectionsGradientStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 'full',
    height: '1/4',
    bgGradient: 'linear(to-t, black, transparent)',
  },

  // Title styles
  titleStyle: {
    fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
    marginBottom: 8,
    marginTop: 4,
    color: 'white',
    fontFamily: 'display',
    textTransform: 'uppercase',
    textAlign: 'center',
    zIndex: 1,
    position: 'relative',
    letterSpacing: 4,
  },

  // Hero image styles
  heroImageStyle: {
    width: '100%', // Full width
    height: '90vh', // Full height
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Carousel styles (if needed in the future)
  carouselConfig: {
    animationHandler: 'fade',
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
    transitionTime: 500,
    showThumbs: false,
    showStatus: false,
    showArrows: false,
    swipeable: false,
    showIndicators: false,
  },

  heroImageContainer: {
    position: 'relative',
  },
  heroImageContentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    bg: `rgba(0,0,0,0.1)`,
    color: 'white',
    p: 2,
    pb: [8, 8, 12],
    textAlign: 'center',
    display: ['flex', 'flex', 'none'],
    justifyContent: 'stretch',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    width: '100%',
    height: '100vh',
  },

  heroTitle: {
    fontSize: ['xl', '2xl', '4xl'],
    boxShadow: '1px 1px 11px 1px #00FFE4',
    py: 2,
    px: 4,
  },

  // Top gradient style
  topGradientStyle: {
    position: 'absolute',
    display: ['none', 'none', 'block'],
    top: 0,
    left: 0,
    width: 'full',
    height: '1/4',
    bgGradient: 'linear(to-b, black, transparent)',
    zIndex: -1,
  },

  // Logo container styles
  logoContainerStyle: {
    backgroundColor: 'white',
    paddingX: 4,
    paddingY: 2,
    borderRadius: 'md',
  },

  // Business info styles
  businessInfoStyle: {
    container: {
      position: 'absolute',
      bottom: 0,
      width: 'full',
      justifyContent: 'center',
      transform: 'translateX(-50%)',
      left: '50%',
      paddingBottom: 4,
      fontSize: ['sm', 'base'],
      zIndex: 10,
    },
    phoneStyle: {
      color: 'white',
      // ... any other styles for phone
    },
    separatorStyle: {
      color: 'white',
      // ... any other styles for separator
    },
    addressStyle: {
      color: 'white',
      // ... any other styles for address
    },
  },

  callToActionVariant: 'outline',
  callToActionConfig: {
    defaultVariant: 'outlined',
  },
  youtubeEmbedStyle: {
    container: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      flexDirection: 'column',
      px: [8, 12],
    },
    headingTitle: {
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: ['2xl', '4xl'],
    },
    headingSubtitle: {
      color: 'white',
      fontSize: 'base',
      fontFamily: 'body',
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 'light',
      fontSize: ['sm', 'lg'],
      textAlign: 'center',
    },
    callToActionButton: {
      position: 'absolute',
      width: '100%',
      bottom: [6, '', 8, 8],
      display: 'flex',
      justifyContent: 'center',
      zIndex: 11,
    },
  },
};
