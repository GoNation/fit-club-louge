import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Masonry from './gallery/Masonry';
import Album from './Album';
import { useRouter } from 'next/router';
import { Box, Grid, Button, Text } from '@chakra-ui/react';

export default function AlbumGallery({
  galleryData,
  styles,
  filteredOutAlbums,
}) {
  const router = useRouter();
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = album => {
    setActiveAlbum(album);
    router.push(`/gallery#${album.id}`);
  };

  const handleBackClick = () => {
    setActiveAlbum(null);
    router.push(`/gallery`);
  };

  const albumNameStyle = {
    fontSize: ['xl', '2xl', '3xl', '4xl', '5xl'],
    color: 'primary',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  return (
    <Box px={[2, 4, 12]} bg="light" py={12} className="with-texture">
      {activeAlbum ? (
        <>
          <Button variant={'primary'} onClick={handleBackClick}>
            <FaArrowLeft />
            <Box ml={4}>Go Back to Albums</Box>
          </Button>
          <Text {...albumNameStyle}>{activeAlbum.name}</Text>
          <Masonry
            data={[activeAlbum]}
            config={{
              styles: styles,
            }}
          />
        </>
      ) : (
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
          maxW="1440px"
          mx="auto"
        >
          {galleryData
            .filter(abm => !filteredOutAlbums.includes(abm.name.toLowerCase()))
            .map(album => (
              <Album
                key={album.id}
                album={album}
                onAlbumClick={() => handleAlbumClick(album)}
              />
            ))}
        </Grid>
      )}
    </Box>
  );
}
