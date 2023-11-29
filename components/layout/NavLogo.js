import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box } from '@chakra-ui/react';

export default function NavLogo({ logo, business }) {
  return (
    <Flex w="full" justifyContent="center" py={2} px={4} rounded="sm">
      <Box>
        <Link href={'/'}>
          <Image src={logo} alt={business.name} width={500} height={200} />
        </Link>
      </Box>
    </Flex>
  );
}
