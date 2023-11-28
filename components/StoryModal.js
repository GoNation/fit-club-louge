import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import extractStory from 'helpers/extractStory';
import Body from './ui/Body';

const StoryModal = ({ story, isOpen, onClose }) => {
  const { images } = extractStory(story);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bg="dark" overflow="hidden">
        <ModalBody p={0}>
          <Flex align="stretch">
            <Box flex={1} position="relative">
              {images.length > 1 ? (
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  infiniteLoop={true}
                >
                  {images.map((src, index) => (
                    <Box key={index}>
                      <img src={src} alt={`story-image-${index}`} />
                    </Box>
                  ))}
                </Carousel>
              ) : (
                <img
                  src={images[0] || '/card_default.png'}
                  alt="story-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </Box>
            <Box flex={1} p={5} color="white">
              <Text fontSize="2xl" mb={3} color={'primary'}>
                {story.title}
              </Text>
              <Text fontSize="xl" mb={3}>
                {story.subtitle}
              </Text>
              <Body body={story.body} color="white" />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StoryModal;
