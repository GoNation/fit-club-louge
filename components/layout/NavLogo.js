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

  return (
    <Flex justifyContent="center" py={2} px={4} rounded="sm">
      <Box>
        <Link href={'/'}>
          <Image
            src={logo}
            alt={business.name}
            width={logoWidth}
            height={logoHeight}
          />
        </Link>
      </Box>
    </Flex>
  );
}
