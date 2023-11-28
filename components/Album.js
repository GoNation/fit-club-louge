import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const Album = ({ album, coverPhotoIndex = 0, customStyling, onAlbumClick }) => {
  const coverPhoto = album.photos[coverPhotoIndex];

  const albumNameStyle = {
    position: 'absolute',
    zIndex: 1,
    color: 'primary',
    background: 'rgba(0,0,0,.9)',
    width: '100%',
    py: 2,
    textShadow: '0 2px 2px rgba(0, 0, 0, 0.7)',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'top 0.3s ease, transform 0.3s ease',
    textAlign: 'center',
    fontSize: ['xl', '2xl', '3xl', '4xl'],
    textTransform: 'uppercase',
  };

  return (
    <Box
      p={4}
      rounded="lg"
      shadow="md"
      cursor="pointer"
      onClick={onAlbumClick}
      className={customStyling}
      _hover={{
        '.albumName': {
          top: '100%',
          transform: 'translateY(-100%)',
        },
      }}
    >
      <Flex
        position="relative"
        w="full"
        h={{ base: '14rem', md: '20rem', lg: '24rem' }}
        rounded="md"
        overflow="hidden"
        shadow="sm"
        mb={4}
        justify="center"
        align="center"
        transition="all 0.3s ease" // Ensure smooth transition
      >
        {/* Cover Photo */}
        <Image
          src={coverPhoto.imageUrl}
          alt={coverPhoto.caption || 'Album Cover'}
          objectFit="cover"
          w="full"
          h="full"
        />
        {/* Album Name */}
        <Text className="albumName" sx={albumNameStyle}>
          {album.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default Album;
