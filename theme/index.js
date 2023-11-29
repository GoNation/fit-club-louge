import { extendTheme } from '@chakra-ui/react';
import themeData from 'content/theme/theme.json';

const { colors, fonts, styles, buttons, heading, modal } = themeData;

const createButtonVariant = variant => ({
  ...buttons?.[variant]?.style,
  ...buttons?.[variant]?.typography,
  ...buttons?.[variant]?.layout,
  _hover: {
    ...buttons?.[variant]?._hover,
  },
});

const overlayRGBA = modal.overlay.bg.match(/\d+/g).map(Number);
const overlayBg = `rgba(${overlayRGBA[0]}, ${overlayRGBA[1]}, ${overlayRGBA[2]}, ${modal.overlay.opacity})`;

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        ...styles.global,
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
      baseStyle: heading.baseStyle,
    },
    Modal: {
      baseStyle: {
        ...modal,
        overlay: {
          bg: overlayBg,
        },
      },
    },
    Button: {
      baseStyle: buttons.baseStyle,
      variants: {
        ...Object.keys(buttons).reduce((acc, variant) => {
          acc[variant] = createButtonVariant(variant);
          return acc;
        }, {}),
      },
    },
  },
});

export default theme;
