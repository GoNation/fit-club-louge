import React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@chakra-ui/react';

const Masonry = ({ data, config }) => {
  const imagesFlattened = data
    .map(album => album.photos.map(photo => photo))
    .flat();

  const getDynamicStyles = () => {
    const value = Math.random() * 100;
    if (value < 13) {
      return { gridColumn: 'span 1', gridRow: 'span 2' }; // tall
    }
    if (value < 26) {
      return { gridColumn: 'span 2', gridRow: 'span 1' }; // wide
    }
    if (value < 39) {
      return { gridColumn: 'span 2', gridRow: 'span 2' }; // big
    }
    return { gridColumn: 'span 1', gridRow: 'span 1' }; // default
  };

  const { styles } = config;

  return (
    <Box {...styles.container}>
      <Grid {...styles.grid}>
        {imagesFlattened.map(img => (
          <Box key={img.id} {...getDynamicStyles()} {...styles.box}>
            <Image
              src={img.imageUrl}
              width={400}
              height={400}
              alt={img.caption || 'Masonry gallery'}
              style={{ ...styles.image }}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Masonry;
