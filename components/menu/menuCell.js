import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const MenuCell = ({ onCellClick, section, inventory }) => {
  const defaultCellBG =
    'https://res.cloudinary.com/gonation/gonation.data.prod/default/img-sec-cover-full.png';

  return (
    <Box
      as="div"
      className={`section-cell ${section.name}`}
      onClick={() => {
        return onCellClick({ section, inventory });
      }}
      position="relative"
      overflow="hidden"
    >
      <Box className="menuCell" mb={4}>
        <Box className="cellImageContainer" position="relative">
          {section.imageUrl !== defaultCellBG && (
            <Image
              style={{
                margin: 'auto',
              }}
              width={400}
              height={400}
              className="cellImage"
              src={section.imageUrl}
              alt="Menu Section Display"
              _hover={{
                transform: 'scale(1.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
            />
          )}
          <Text
            className={`cellName`}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontFamily="heading"
            background="radial-gradient(circle, rgba(0,0,0,0.8), rgba(0,0,0,0))"
            zIndex="1"
            px={5}
            py={2}
            fontSize={'xl'}
          >
            {section.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuCell;
