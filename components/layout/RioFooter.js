import React from 'react';
import { Box, Icon, Flex, Text, Link, Typography } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import SocialLinks from 'components/ui/SocialLinks';
// React icons up arrows
import { RiArrowDropUpLine } from 'react-icons/ri';
import printAddress from 'helpers/printing/printAddress';
import getGoogleString from 'helpers/printing/getGoogleString';
import Phone from 'components/contact/Phone';

export default function RioFooter({ business }) {
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Box
        bgColor={'#2b4371'}
        textAlign={'center'}
        color={'white'}
        py={16}
        pb={24}
      >
        <Text color="white" textTransform={'uppercase'} mb={6}>
          Follow Along
        </Text>
        <div className="flex justify-center">
          <SocialLinks links={business.links} fill="#ffffff" />
        </div>
      </Box>
      <Box
        bgColor="#262526"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
        py={16}
        pos={'relative'}
      >
        <Box
          bgColor="#262526"
          p={4}
          borderBottomLeftRadius={'150px'}
          borderBottomRightRadius={'150px'}
          borderTopRadius={'150px'}
          borderTopLeftRadius={'150px'}
          position={'absolute'}
          top={-8}
          cursor={'pointer'}
          onClick={scrollToTop}
        >
          <RiArrowDropUpLine fill={'#fff'} size={42} />
        </Box>
        <Text color="#919191" mb={4}>
          {business.name}
        </Text>

        <div className="flex items-center mb-2 ">
          <span className="mr-1">
            <FaMapMarkerAlt fill={'#919191'} />
          </span>
          <Text color="#dede0e" as={'a'} href={getGoogleString(business)}>
            {printAddress(business)}
          </Text>
        </div>
        <div className="flex items-center">
          <span className="mr-1">
            <FaPhoneAlt fill={'#919191'} />
          </span>

          <Text color="#dede0e" as={'a'} href={`tel:${business.phone}`}>
            {business.phone}
          </Text>
        </div>
        <div className="text-center justify-center flex mt-8">
          <Link
            href="https://www.gonation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/gn-power-white.svg"
              alt="Powered by GoNation"
              className="w-48 pt-1"
            />
          </Link>
        </div>
      </Box>
    </>
  );
}
