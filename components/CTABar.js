import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import React from 'react';

export default function CTABar({ content }) {
  const { label, url } = content;
  return (
    <Link
      href={url}
      passHref
      target={url.includes('http') ? '_blank' : '_self'}
    >
      <Box
        as="a"
        bg="dark"
        textAlign={'center'}
        fontWeight={'bold'}
        py={1}
        color={'primary'}
        cursor={'pointer'}
        transition="all 0.3s ease" // Add a transition to make the hover animation smoother
        display={'flex'}
        justifyContent={'center'}
        textTransform={'uppercase'}
        fontSize={['xs', 'sm']}
        _hover={{
          bg: 'primary', // Set the background color to primary when hovered
          color: 'dark', // Set the text color to dark when hovered
        }}
      >
        {label}
      </Box>
    </Link>
  );
}
