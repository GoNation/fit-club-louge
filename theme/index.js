import { extendTheme } from '@chakra-ui/react';
import themeData from 'content/theme/theme.json';

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
        // Darken the background behind the modal
        ...themeData.modal,
        overlay: {
          bg: `rgba(${
            themeData.modal.overlay.bg.match(/\d+/g).map(Number)[0]
          }, ${themeData.modal.overlay.bg.match(/\d+/g).map(Number)[1]}, ${
            themeData.modal.overlay.bg.match(/\d+/g).map(Number)[2]
          }, ${themeData.modal.overlay.opacity})`,
        },
      },
    },
    Button: {
      baseStyle: themeData.buttons.baseStyle,
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
          borderWidth: '1px',
          borderStyle: 'solid',
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
    },
  },
});

export default theme;
