import React from 'react';
import { Box } from '@chakra-ui/react';
import { Sling as HamburgerJS } from 'hamburger-react';

export default function Hamburger({
  hamburgerStyles,
  navIsOpen,
  setNavIsOpen,
  hamburgerSettings,
}) {
  let displayStyle;

  switch (hamburgerSettings?.hamburgerVisibility) {
    case 'mobile':
      displayStyle = { base: 'block', md: 'none' };
      break;
    case 'tablet':
      displayStyle = { base: 'block', lg: 'none' };
      break;
    case 'largeDisplays':
      displayStyle = { base: 'block', xl: 'none' };
      break;
    case 'alwaysVisible':
      displayStyle = { base: 'block' };
      break;
    default:
      displayStyle = { base: 'block' }; // default visibility
  }

  return (
    <Box sx={{ ...hamburgerStyles }} display={displayStyle}>
      <HamburgerJS
        toggled={navIsOpen}
        toggle={setNavIsOpen}
        color={hamburgerSettings?.hamburgerColor || '#ffffff'}
        rounded={false}
        size={hamburgerSettings?.hamburgerSize}
      />
    </Box>
  );
}
