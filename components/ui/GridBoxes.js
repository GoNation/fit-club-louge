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
      px={[1, 8, 16]}
      sx={{
        bg: 'light',
        backgroundImage: `url("https://www.transparenttextures.com/patterns/worn-dots.png")`,
      }}
    >
      <Box
        p={[1, 4]}
        bg={'light'}
        borderWidth={8}
        border={'8px solid'}
        borderLeftColor={'primary'}
        borderRightColor={'primary'}
        borderTopColor={'dark'}
        borderBottomColor={'dark'}
        maxW={{
          base: '100%',
          md: '100%',
          lg: '90%',
          xl: '70%',
        }}
        m={'auto'}
      >
        <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(12, 1fr)"
          gap={{ base: '4', md: 8 }}
          display={{ base: 'block', md: 'grid' }}
          minH={{ base: 'auto', md: 900 }}
          height={['auto']}
          p={{ base: 4 }}
        >
          <Box gridColumn="span 7" gridRow="span 12" mb={[8, 0]}>
            <ClickableBox story={stories[0]} noClick index={0} />
          </Box>
          <Box gridColumn="span 5" gridRow="span 6" mb={[8, 0]}>
            <ClickableBox story={stories[1]} noClick />
          </Box>
          <Box gridColumn="span 5" gridRow="span 6" mb={[8, 0]}>
            <ClickableBox story={stories[2]} noClick />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default GridBoxes;
