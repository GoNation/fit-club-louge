import { extendTheme } from '@chakra-ui/react';
import themeData from 'content/theme/theme.json';
console.log('themeData', themeData);

const theme = extendTheme({
  colors: themeData.colors,
  fonts: themeData.fonts,
  styles: {
    global: {
      body: {
        ...themeData.styles.global,
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
      baseStyle: themeData.heading.baseStyle,
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
