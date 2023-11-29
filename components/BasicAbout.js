import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function BasicAbout({ business }) {
  const { desc } = business;
  return (
    <Box maxW={'3xl'} mx={'auto'} py={12} px={2}>
      <Text variant="p" color="dark" fontSize={('lg', 'xl', '2xl')}>
        {desc}
      </Text>
    </Box>
  );
}
