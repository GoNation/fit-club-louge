import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const ImageComponent = props => {
  const {
    img,
    containerStyle,
    relativeContainerStyle,
    imageStyle,
    size = 800,
    alt = 'Small Business Website Image',
  } = props;

  return (
    <Box {...containerStyle}>
      <Box {...relativeContainerStyle}>
        <Image
          src={`https://res.cloudinary.com/gonation/w_${size}/q_auto/f_auto/${img}`}
          objectFit="cover"
          layout="fill"
          alt={alt}
          {...imageStyle}
        />
      </Box>
    </Box>
  );
};

export default ImageComponent;
