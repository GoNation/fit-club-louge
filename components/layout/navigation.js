import React, { useState, useEffect } from 'react';
import MobileNavigation from './MobileNavigation';
import { FaAngleDown } from 'react-icons/fa';
import { Box, Flex, Text } from '@chakra-ui/react';

import buildAvatar from 'helpers/general/buildAvatar';
import CTABar from 'components/CTABar';
import Dropdown from './Dropdown';
import LinkItem from './LinkItem';
import NavLogo from './NavLogo';
import Hamburger from './Hamburger';
import slugifyLower from 'helpers/printing/slugifyLower';

const Navigation = ({
  business,
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

  const renderRoute = route => (
    <Box
      key={slugifyLower(route.name)}
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
          {isDropdownVisible && (
            <Dropdown
              children={route.children}
              isDropdownVisible={isDropdownVisible}
            />
          )}
        </>
      ) : (
        <LinkItem
          route={route}
          px={2}
          textTransform="uppercase"
          display={route.hidden ? 'none' : 'block'}
          bg={route.isPrimaryCalledToAction ? 'white' : 'white'}
          color="dark"
          borderWidth={route.isPrimaryCalledToAction ? '1px' : '0'}
          borderColor="none"
          fontFamily="heading"
          fontSize={['xs', 'xs', 'xs', 'xs', 'md']}
          fontWeight="bold"
          letterSpacing={1}
          _hover={{
            textDecoration: 'underline',
            color: 'primary',
          }}
        />
      )}
    </Box>
  );

  const renderLogo = () => <NavLogo logo={logo} business={business} />;

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
      case 'stacked':
        return (
          <>
            {renderLogo()}
            {renderNavItems(routes)}
          </>
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

  const hamburgerStyles = {
    zIndex: 999999,
  };

  return (
    <>
      <Box
        position={navPosition}
        w="full"
        zIndex={50}
        bg={hasScrolled() ? bgColor : bgColor}
        transition="background-color 0.3s ease-in-out"
        // borderBottom={hasScrolled() && '1px solid'}
        // borderColor={hasScrolled() && 'primary'}
        py={{ base: 0 }}
      >
        {navigationSettings?.fixedNavigationCTABar?.displayFixedBarCTA && (
          <CTABar
            content={
              navigationSettings?.fixedNavigationCTABar?.displayFixedBarCTA
            }
            businessId={business.businessId}
          />
        )}

        <Flex
          w="full"
          py={2}
          px={2}
          alignItems="center"
          justifyContent="space-between"
        >
          {renderNavigationContent()}
          <Hamburger
            hamburgerStyles={hamburgerStyles}
            navIsOpen={navIsOpen}
            setNavIsOpen={setNavIsOpen}
            navigationSettings={navigationSettings}
            hamburgerSettings={navigationSettings?.hamburgerSettings}
          />

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
