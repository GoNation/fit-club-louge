import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Link from 'next/link';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';
import MobileNavigation from './MobileNavigation';
import { FaAngleDown } from 'react-icons/fa';
import { Box, Flex, Text } from '@chakra-ui/react';

import buildAvatar from 'helpers/general/buildAvatar';
import slugifyLower from 'helpers/printing/slugifyLower';
import CTABar from 'components/CTABar';

const Navigation = ({
  business,
  logoAsText = false,
  navLayout = 'stacked',
  bgColor,
  navPosition = 'fixed',
  routes = [],
  navigationSettings,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const unhiddenRoutes = routes.filter(route => !route.hidden);

  const halfLength = Math.ceil(unhiddenRoutes.length / 2);
  const leftRoutes = unhiddenRoutes.slice(0, halfLength);
  const rightRoutes = unhiddenRoutes.slice(halfLength);

  const logo = buildAvatar(business);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hasScrolled = () => scrollPosition > 1;

  const closeMobileNav = () => {
    setNavIsOpen(false);
  };

  const Dropdown = ({ children }) => (
    <Box
      position="absolute"
      left={-10}
      //   right={0}
      top={12}
      mt={0}
      bg="#041a32"
      shadow="md"
      py={1}
      display={{ base: 'none', md: 'flex' }}
      flexDirection="column"
      alignItems="center"
      width={36}
      opacity={isDropdownVisible ? 1 : 0}
      transition="opacity 0.3s ease-in-out"
    >
      {children.map(child => (
        <Box mb={3}>
          <LinkItem
            key={slugify(child.name, { lower: true })}
            route={child}
            px={4}
            py={2}
            hoverBg="secondary"
            color="white"
            hoverColor="white"
            fontFamily="heading"
            textTransform="uppercase"
          />
        </Box>
      ))}
    </Box>
  );

  const LinkItem = ({ route, ...props }) => (
    <Link
      href={route.path || route.url || slugifyLower(route.name) || '#'}
      target={
        // IF route.url OR route.path includes 'http' THEN '_blank' ELSE '_self'
        (route.url || route.path).includes('http') ? '_blank' : '_self'
      }
    >
      <Text as="span" {...props}>
        {route.name}
      </Text>
    </Link>
  );

  const renderRoute = route => (
    <Box
      key={slugify(route.name, { lower: true })}
      position="relative"
      display="group"
      cursor={route.children ? 'pointer' : 'pointer'}
      ml={{
        base: 0,
        lg: 2,
      }}
    >
      {route.children ? (
        <>
          <Text
            as="span"
            color="white"
            textTransform="uppercase"
            display="flex"
            alignItems="center"
            fontFamily="heading"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            {route.name}
            <Box ml={1}>
              <FaAngleDown color="#ffffff" />
            </Box>
          </Text>
          {isDropdownVisible && <Dropdown children={route.children} />}
        </>
      ) : (
        <LinkItem
          route={route}
          px={2}
          textTransform="uppercase"
          display={route.hidden ? 'none' : 'block'}
          bg={route.isPrimaryCalledToAction ? 'white' : 'transparent'}
          color="primary"
          borderWidth={route.isPrimaryCalledToAction ? '1px' : '0'}
          borderColor="primary"
          fontFamily="heading"
          fontSize={['xs', 'xs', 'xs', 'xs', 'md']}
          _hover={{
            textDecoration: 'underline',
          }}
        />
      )}
    </Box>
  );

  const renderLogo = () => (
    <Flex w="full" justifyContent="center" py={2} px={4} rounded="sm">
      <Box>
        <Link href={'/'}>
          <Image src={logo} alt="Business Logo" width={500} height={200} />
        </Link>
      </Box>
    </Flex>
  );

  const renderNavItems = routesToRender => (
    <Flex display={{ base: 'none', lg: 'flex' }} spacing={3}>
      {routesToRender.map(renderRoute)}
    </Flex>
  );

  const renderNavigationContent = () => {
    switch (navLayout) {
      case 'logoLeft':
        return (
          <Flex w="full" justifyContent="space-between" alignItems="center">
            {renderLogo()}
            {renderNavItems(routes)}
          </Flex>
        );
      case 'logoRight':
        return (
          <Flex justifyContent="space-between" alignItems="center">
            {renderNavItems(routes)}
            {renderLogo()}
          </Flex>
        );
      case 'logoCentered':
        return (
          <Flex justifyContent="space-between" alignItems="center" w="full">
            <Flex flex={[0, 0, 0, 1]} justifyContent="flex-end">
              {renderNavItems(leftRoutes)}
            </Flex>
            <Box w={{ base: '200px', lg: '200px', xl: '300px' }} mx="auto">
              {/* Adjust the width as needed */}
              {renderLogo()}
            </Box>
            <Flex flex={1} justifyContent="flex-start">
              {renderNavItems(rightRoutes)}
            </Flex>
          </Flex>
        );
      default:
        return (
          <>
            {renderLogo()}
            {renderNavItems(routes)}
          </>
        );
    }
  };

  return (
    <>
      <Box
        position={navPosition}
        w="full"
        zIndex={50}
        bg={hasScrolled() ? 'rgba(0, 0, 0, 0.8)' : bgColor}
        transition="background-color 0.3s ease-in-out"
        borderBottom={hasScrolled() && '1px solid'}
        borderColor={hasScrolled() && 'primary'}
      >
        {navigationSettings?.displayFixedBarCTA && (
          <CTABar content={navigationSettings} />
        )}

        <Flex
          w="full"
          py={2}
          px={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {renderNavigationContent()}

          <Box
            display={{ base: 'block', lg: 'none' }}
            right={8}
            {...{ md: { top: 16 }, base: { top: 14 } }}
            zIndex={999999}
          >
            <Hamburger
              toggled={navIsOpen}
              toggle={setNavIsOpen}
              color={'#04F2E9'}
              rounded={false}
              size={28}
            />
          </Box>

          {navIsOpen && (
            <MobileNavigation
              closeMobileNav={closeMobileNav}
              business={business}
              logo={logo}
              routes={routes}
            />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Navigation;
