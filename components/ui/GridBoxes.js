import React from 'react';
import Fade from 'react-reveal/Fade';
import ClickableBox from 'components/ui/ClickableBox';
import { Grid, Box } from '@chakra-ui/react';

const GridBoxes = ({ stories = [] }) => {
  if (stories.length > 3) {
    console.error('GridBoxes component currently supports up to 3 stories.');
    return null;
  }

  return (
    <Box
      p={8}
      py={[8, 12, 32]}
      px={[4, 8, 16]}
      sx={{
        bg: 'dark',
        backgroundImage: `url("https://www.transparenttextures.com/patterns/black-lozenge.png")`,
      }}
    >
      <Box
        p={[2, 4]}
        bg={'dark'}
        maxW={{
          base: '100%',
          md: '100%',
          lg: '80%',
          xl: '80%',
          '2xl': '80%',
        }}
        m={'auto'}
        border="1px solid white"
      >
        <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(12, 1fr)"
          gap={{ base: '2', md: 8 }}
          display={{ base: 'block', md: 'grid' }}
          minH={{ base: 'auto', md: 900 }}
          height={['auto']}
          p={{ base: 4 }}
        >
          <Box gridColumn="span 7" gridRow="span 12">
            <ClickableBox story={stories[0]} noClick index={0} />
          </Box>
          <Box gridColumn="span 5" gridRow="span 6">
            <ClickableBox story={stories[1]} noClick />
          </Box>
          <Box gridColumn="span 5" gridRow="span 6">
            <ClickableBox story={stories[2]} noClick />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default GridBoxes;
