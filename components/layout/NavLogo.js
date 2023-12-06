import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, useMediaQuery } from '@chakra-ui/react';

export default function NavLogo({ logo, business }) {
  // Check if the screen size is mobile
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  // Set logo dimensions based on screen size
  const logoWidth = isMobile ? 100 : 200;
  const logoHeight = isMobile ? 100 : 200;

  const getTransformedLogoUrl = url => {
    const baseUrl = 'https://res.cloudinary.com/gonation/';
    const transformations = 'w_200,q_auto,f_auto';
    const imagePath = url.split(baseUrl)[1];
    return `${baseUrl}${transformations}/${imagePath}`;
  };

  const transformedLogo = getTransformedLogoUrl(logo);

  return (
    <Flex justifyContent="center" py={2} px={4} rounded="sm">
      <Box>
        <Link href={'/'}>
          <Image
            src={transformedLogo}
            alt={business.name}
            width={logoWidth}
            height={logoHeight}
          />
        </Link>
      </Box>
    </Flex>
  );
}
