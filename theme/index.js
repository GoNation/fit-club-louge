import { extendTheme } from '@chakra-ui/react';
import config from 'content/config/config.json';

const theme = extendTheme({
  colors: {
    primary: '#04F2E9',
    secondary: '#299fff',
    third: '#04F2E9',
    accent: '#04F2E9',
    dark: '#00001E',
    light: '#cecece',
    menuBg: '#F5E6D9',
  },
  fonts: {
    body: 'Open Sans, system-ui, sans-serif',
    heading: 'Open Sans, system-ui, sans-serif',
    link: 'Open Sans, system-ui, sans-serif',
    accent: 'digital, system-ui, sans-serif',
    menuSection: 'Open Sans',
  },

  styles: {
    global: {
      body: {
        backgroundColor: 'dark',
      },
    },
  },

  components: {
    PageHero: {
      baseStyle: ({ shouldZoomOut }) => ({
        container: {
          transform: shouldZoomOut ? 'scale(1)' : 'scale(1.125)',
          transition: 'transform 30s',
        },
      }),
    },
    Heading: {
      baseStyle: {
        fontWeight: 'normal',
        textTransform: 'uppercase',
        color: 'primary',
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          borderRadius: '0',
          bg: 'dark',
          color: 'white',
        },
        // center the modal
        dialogContainer: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        // Darken the background behind the modal
        overlay: {
          bg: 'rgba(0, 0, 0, 0.7)',
        },
      },
    },
    Button: {
      baseStyle: {
        // fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      variants: {
        default: {
          bg: 'transparent',
          borderColor: 'dark',
          fontWeight: 'normal',
          _hover: {
            bg: 'light',
            color: 'primary',
          },
        },
        primary: {
          bg: 'primary',
          fontWeight: 'normal',
          color: 'dark',
          borderBottom: '1px solid',
          borderColor: 'primary',
          borderRadius: 4,
          fontSize: 'lg',
          fontWeight: 'bold',
          boxShadow: '1px 1px 11px 1px #00FFE4',
          _hover: {
            color: 'white',
          },
        },
        primaryFilled: {
          bg: 'dark',
          color: 'primary',
          borderColor: 'light',
          _hover: {
            bg: 'light',
            color: 'primary',
          },
        },
        outline: {
          color: 'white',
          border: '1px solid',
          borderColor: 'white',
          px: 12,
          letterSpacing: 2,
          fontSize: ['sm', '', '', 'lg'],
          _hover: {
            bg: 'white',
            color: 'dark',
          },
        },
        unset: {
          bg: 'transparent',
          color: 'light',
          borderColor: 'light',
          _hover: {
            bg: 'light',
            color: 'white',
          },
        },
        // ... you can add more variants here
      },
      defaultProps: {
        size: 'lg',
      },
    },
  },
});

export default theme;
