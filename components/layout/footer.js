import React from 'react';
import Link from 'next/link';
import SocialLinks from '../ui/SocialLinks';
import Phone from 'components/contact/Phone';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import buildAvatar from 'helpers/general/buildAvatar';
import {
  Box,
  Grid,
  Image,
  Text,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react';

const RouteLinks = ({ routes, tag }) => (
  <Box as="ul">
    {routes
      .reduce((acc, route) => {
        if (route.children) {
          acc = acc.concat(route.children);
        } else {
          acc.push(route);
        }
        return acc;
      }, [])
      .filter(route => route?.tag?.includes(tag))
      .map(route => (
        <Box as="li" key={route.name} mb="3">
          <Link href={route.path || route.url || '#'}>
            <ChakraLink
              as={'span'}
              _hover={{ color: 'primary' }}
              fontSize="sm"
              color="white"
              fontFamily={'body'}
              fontWeight={'bold'}
            >
              {route.name}
            </ChakraLink>
          </Link>
        </Box>
      ))}
  </Box>
);

const Footer = ({ business, routes = [] }) => {
  return (
    <>
      <Box
        as="footer"
        bg="dark"
        borderTopWidth="1px"
        borderColor="primary"
        py={{ base: '12', md: '24' }}
        px="4"
      >
        <Grid
          //   templateColumns={{
          //     base: '1fr',
          //     md: 'repeat(3, 1fr)',
          //     lg: 'repeat(4, 1fr)',
          //   }}
          gap="8"
          maxW="7xl"
          mx="auto"
          px="4"
        >
          <Box order={{ md: 10, lg: 0 }} colSpan={4} width={'100%'}>
            <Box
              display="flex"
              justifyContent={'center'}
              py="2"
              px="4"
              rounded="md"
              mb="2"
            >
              <Image
                src={buildAvatar(business)}
                alt={business.name}
                style={{
                  maxWidth: 800,
                  margin: 'auto',
                  textAlign: 'center',
                  width: '100%',
                }}
              />
            </Box>
            <Text mb="4" maxW="xs" fontSize="sm"></Text>
            {/* <Box display="flex" justifyContent={'center'}>
              <SocialLinks links={business.links} fill="#ffffff" />
            </Box> */}
          </Box>
          {/* <Box></Box>
          <Box></Box> */}
          {/* <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb="2"
              color="white"
              fontFamily={'heading'}
              textTransform={'uppercase'}
            >
              Explore
            </Text>
            <RouteLinks routes={routes} tag="explore" />
          </Box>

          <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb="2"
              color="white"
              fontFamily={'heading'}
              textTransform={'uppercase'}
            >
              Engage
            </Text>
            <RouteLinks routes={routes} tag="engage" />
          </Box> */}

          {/* <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb="2"
              color="white"
              fontFamily={'heading'}
              textTransform={'uppercase'}
            >
              Contact
            </Text>
            <ChakraLink
              href={getGoogleString(business)}
              display="flex"
              alignItems="center"
              mb="2"
              color={'white'}
            >
              <Icon as={FaMapMarkerAlt} mr="1" />
              {printAddress(business)}
            </ChakraLink>
            <Box display="flex" alignItems="center" color="white">
              <Icon as={FaPhoneAlt} mr="1" />
              <Phone {...business} />
            </Box>
          </Box> */}
        </Grid>
      </Box>

      <Box
        bg="black"
        borderTopWidth="2px"
        borderColor="primary"
        py="1"
        pb="2"
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        <Link href="https://www.gonation.com/">
          <Image src="/gn-gold.png" alt="Powered by GoNation" w="44" pt="1" />
        </Link>
      </Box>
    </>
  );
};

export default Footer;
