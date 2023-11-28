import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Text, Grid, AspectRatio, useDisclosure } from '@chakra-ui/react';
import Price from './Price';
import PriceWithVariants from './PriceWithVariants';
import makeSentencesCapital from 'helpers/general/makeSentanceCapital';
import Lightbox from './Lightbox';

const MenuItem = ({ item, withDollar, sectionImagesCount }) => {
  const [lightboxSrc, setLightboxSrc] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const removeImageCopy = img =>
    img.includes('copy') ? img.substring(0, img.length - 5) : img;

  const imageCopy = removeImageCopy(item.imageUrl);

  const handleImageClick = () => {
    setLightboxSrc(imageCopy);
    onOpen();
  };

  const styles = {
    container: {
      // styles for container Box component
      position: 'relative',
      width: ['100%', '', '50%'],
      mb: 4,
      pr: [0, '', 4],
    },
    imageAspectRatio: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bg: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    imageContainer: {
      // styles for image container Box component
      borderRadius: '10px',
      border: '3px solid #262526',
      overflow: 'hidden',
      height: '0',
      paddingTop: '100%',
      position: 'relative',
      onClick: handleImageClick,
      gridRow: '1 / span 3',
    },
    image: {
      // styles for Image component
      width: 200,
      height: 200,
    },
    imageText: {
      // styles for image caption Box component
      position: 'absolute',
      borderBottomLeftRadius: 'md',
      bottom: 0,
      bg: 'rgb(0,0,0, .6)',
      fontFamily: 'heading',
      px: 4,
      py: 2,
      textTransform: 'uppercase',
      borderRadius: 'tr',
      color: 'white',
      fontSize: 'xs',
    },
    heading: {
      // styles for heading Text component
      fontSize: ['md', 'lg', 'xl', '2xl'],
      gridRow: '1',
      textTransform: 'uppercase',
      fontFamily: 'heading',
      color: '#152738',
      fontWeight: 'bold',
      fontFamily: 'accent',
    },
    description: {
      // styles for description Text component
      fontSize: ['sm', 'base', 'lg'],
      color: 'gray.800',
      gridRow: '3',
      lineHeight: '6',
      fontFamily: 'accent',
      fontWeight: 200,
      maxWidth: ['', '', 450],
    },
  };

  return (
    <Box {...styles.container}>
      <Lightbox
        isOpen={isOpen}
        src={lightboxSrc}
        caption={item.name}
        onClose={onClose}
      />

      <Grid
        templateColumns={
          sectionImagesCount === 0 ? ['3fr, 3fr'] : ['1fr 3fr', '1fr 3fr']
        }
        gap={4}
      >
        {sectionImagesCount > 0 && (
          <Box {...styles.imageContainer}>
            <AspectRatio {...styles.imageAspectRatio}>
              <Image src={imageCopy} alt={item.name} {...styles.image} />
            </AspectRatio>
            <Box {...styles.imageText}>{item.name}</Box>
          </Box>
        )}

        <Box>
          <Grid templateColumns="1fr auto" gap={4}>
            <Text {...styles.heading}>{item.name}</Text>
            {item.variants && (
              <Price withDollar={true} variants={item.variants} gridRow="2" />
            )}
          </Grid>
          {item.desc && (
            <Text {...styles.description}>
              {makeSentencesCapital(item.desc)}
            </Text>
          )}
          {item.variants?.length > 1 || item.variants?.[0]?.label !== '' ? (
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              gridRow="4"
            />
          ) : null}
        </Box>
      </Grid>
    </Box>
  );
};

export default MenuItem;
