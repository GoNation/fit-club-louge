import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useStyleConfig,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageHero = props => {
  const { withLogo, img, pageTitle, description } = props;
  const [shouldZoomOut, setShouldZoomOut] = useState(false);

  const router = useRouter();

  // Reset animation on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setShouldZoomOut(false);
      setTimeout(() => {
        setShouldZoomOut(true);
      }, 10);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    setShouldZoomOut(true);
  }, []);

  const styles = useStyleConfig('PageHero', { shouldZoomOut });

  if (!img?.cloudinaryId) {
    return <Box />;
  }

  const imageUrl = `https://res.cloudinary.com/gonation/w_1600/q_auto/f_auto/${img.cloudinaryId}`;

  return (
    <Box
      pt=""
      overflow="hidden"
      position="relative"
      h={{
        base: '300px',
        md: '400px',
        lg: '500px',
        xl: '600px',
      }}
    >
      <Box
        sx={styles.container}
        position="absolute"
        w="100%"
        h="100%"
        top="0"
        left="0"
        zIndex="0"
      >
        <Image
          src={imageUrl}
          quality={75} // Adjust quality as needed
          alt={pageTitle} // Add a relevant alt description
          style={{ objectFit: 'cover' }}
          layout="fill"
          priority={true}
        />
      </Box>

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
              <Image src="/logo.png" width={380} height={100} alt="Logo" />
            </ChakraLink>
          </Link>
        )}
        <Heading
          mt="16"
          fontSize={['3xl', '3xl', '4xl', '5xl']}
          color="white"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="bold"
        >
          {pageTitle}
        </Heading>
        <Flex width="300px" mx="auto">
          <Box width="56%" height={5} bg="black"></Box>
          <Box width="20%" height={5} bg="primary" mx={1}></Box>
          <Box width="24%" height={5} bg="black"></Box>
        </Flex>
        <Text color="white" fontSize="md" mt="4" textAlign="center">
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

export default PageHero;
