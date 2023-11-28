import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link as ChakraLink,
  useStyleConfig,
} from '@chakra-ui/react';

import PixiLine from 'components/PixiLine';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageHero = props => {
  const { withLogo } = props;
  const [shouldZoomOut, setShouldZoomOut] = useState(false);

  const router = useRouter(); // Step 1

  // Reset animation on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setShouldZoomOut(false);
      // Timeout allows for a slight delay to first reset to the initial state
      // and then trigger the animation.
      setTimeout(() => {
        setShouldZoomOut(true);
      }, 10);
    };

    router.events.on('routeChangeComplete', handleRouteChange); // Step 2

    // Cleanup listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    setShouldZoomOut(true);
  }, []);

  const styles = useStyleConfig('PageHero', { shouldZoomOut });

  if (!props?.img?.cloudinaryId) {
    return <Box />;
  }

  return (
    <Box
      pt=""
      overflow="hidden"
      position="relative" // this ensures children with position:absolute are positioned inside this Box
      h={{
        base: '300px',
        md: '400px',
        lg: '500px',
        xl: '600px',
      }}
    >
      {/* Background div that will zoom */}
      <Box
        sx={styles.container}
        background={`linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,.3) 100%), url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${props.img.cloudinaryId})`}
        bgPos="center"
        bgSize="cover"
        h="100%" // this makes it take the full height of its parent
        position="absolute"
        w="100%"
        zIndex="0"
        top="0" // ensure it starts at the top of its parent
        left="0" // ensure it starts at the left of its parent
      />

      {/* Text content positioned on top */}
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        p="4"
        h="100%"
        position="relative"
        zIndex="1"
      >
        {withLogo && (
          <Link href="/" passHref>
            <ChakraLink mb="20">
              <Image src="/logo.png" maxW="380px" w="full" />
            </ChakraLink>
          </Link>
        )}
        <Heading
          mt="16"
          fontSize={['xl', '3xl', '4xl', '5xl']}
          color="white"
          fontWeight={props.pageTitle === 'Weddings' ? 'light' : 'normal'}
          textTransform={'uppercase'}
          textAlign={'center'}
        >
          {props.pageTitle}
        </Heading>
        <PixiLine starColor="accent" />
        <Text color="white" fontSize="md" mt="4" textAlign="center">
          {props?.description}
        </Text>
      </Flex>
    </Box>
  );
};

export default PageHero;
