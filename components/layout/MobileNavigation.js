import {
  Box,
  Flex,
  Image as ChakraImage,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import slugify from 'slugify';
import Image from 'next/image';

const MotionBox = motion(Box);

function MobileNavigation({ navVariants, logo, closeMobileNav, routes = [] }) {
  return (
    <MotionBox
      initial="closed"
      animate="open"
      exit="closed"
      variants={navVariants}
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="full"
      bg="dark"
      px={2}
      pt={4}
      zIndex={50}
    >
      <Flex direction="column" p={12} width={'100%'}>
        <Flex
          direction="column"
          flex={1}
          overflowY="auto"
          mt={{ md: 8 }}
          spacing={4}
          borderTop={2}
          py={4}
          sx={{
            borderTop: '1px solid #41403d',
            borderBottom: '1px solid #41403d',
            textAlign: 'center',
          }}
        >
          {routes
            .reduce((acc, route) => {
              if (route.children) {
                acc = acc.concat(route.children);
              } else {
                acc.push(route);
              }
              return acc;
            }, [])
            .map(route => (
              <Box
                mb={{
                  base: 4,
                  sm: 6,
                  md: 8,
                }}
                key={slugify(route.name, { lower: true })}
              >
                <Link
                  href={
                    route.path ||
                    route.url ||
                    slugify(route.name, { lower: true })
                  }
                  passHref
                >
                  <ChakraLink
                    color="primary"
                    tracking="wide"
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize={{ base: 'base', sm: 'lg', md: 'xl' }}
                    _hover={{ textDecoration: 'underline' }}
                    fontFamily={'heading'}
                    onClick={closeMobileNav}
                  >
                    {route.name}
                  </ChakraLink>
                </Link>
              </Box>
            ))}
        </Flex>
        <Box
          position="absolute"
          bottom={20}
          left="50%"
          transform="translateX(-50%)"
          width="100%"
          maxWidth="350px"
        >
          <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            width={350}
            height={100}
          />
        </Box>
      </Flex>
    </MotionBox>
  );
}

export default MobileNavigation;
