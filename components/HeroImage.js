import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const HeroImage = ({ cloudinaryId, name, description, ...rest }) => (
  <Box position="relative" {...rest}>
    <Image
      key={cloudinaryId}
      alt={name || description}
      src={`https://res.cloudinary.com/gonation/w_1600/q_auto/f_auto/${cloudinaryId}`}
      layout="fill" // This will make the image fill the container, adjust as needed
      objectFit="cover" // This corresponds to the CSS property object-fit
      quality={50} // Adjust the quality as needed
    />
  </Box>
);

export default HeroImage;
