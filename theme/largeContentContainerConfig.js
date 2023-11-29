const shadowyContentContainerWithBg = {
  container: {
    bgSize: 'cover',
    py: [32, '300px', '400px'],
    bgAttachment: ['unset', '', '', 'fixed'],
  },
  innerBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderBottom:
    maxW: { base: '100%', md: '80%', lg: '80%', xl: '80%' },
    m: 'auto',
  },
  contentBox: {
    px: 4,
    py: 8,
    mx: 4,
    color: 'white',
    borderRadius: 'md',
    position: 'relative',
  },
  gradientBg: {
    bg: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)',
  },
  navPosition: {
    top: { md: '8' },
    left: { md: '8' },
  },
  heading: {
    // mb: 8,
    fontSize: { base: '3xl', md: '6xl' },
    fontFamily: 'heading',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subtitle: {
    mb: 8,
    fontSize: { base: 'xl', lg: '2xl' },
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    maxW: 400,
    margin: 0,
    color: 'white',
    fontSize: 'lg',
    lineHeight: 'tall',
  },
  cta: {
    // unset: true,
  },
};

export default shadowyContentContainerWithBg;
