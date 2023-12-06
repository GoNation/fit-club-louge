import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import getGoogleString from 'helpers/printing/getGoogleString';

const FixedCallToActions = ({ business }) => {
  const { phone } = business;

  return (
    <Flex
      display={['flex', 'flex', 'none']}
      position="fixed"
      bottom="0"
      left="0"
      justifyContent="center"
      width="full"
      flexWrap="wrap"
      zIndex="20"
    >
      <Flex
        width="full"
        flexWrap="wrap"
        bg="dark"
        boxShadow="md"
        rounded="md"
        border="2px"
        borderColor="white"
      >
        <Box
          textAlign="center"
          width="50%"
          bg="dark"
          color="white"
          borderRight="1px"
          borderColor="white"
          py="3"
        >
          <Link
            href={`tel:${phone}`}
            display="block"
            fontWeight="bold"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            textDecoration="none"
            isExternal
          >
            Call
          </Link>
        </Box>
        <Box
          textAlign="center"
          width="50%"
          bg="dark"
          color="white"
          borderLeft="1px"
          borderColor="white"
          py="3"
        >
          <Link
            href={getGoogleString(business)}
            display="block"
            fontWeight="bold"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            textDecoration="none"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
          >
            Directions
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default FixedCallToActions;
