import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex, Heading, Text, Link, Image } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';

const fadeVariants = {
  enter: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const SlideContent = ({ title, subtitle, linkTitle, linkAddress }) => (
  <Link
    href={linkAddress}
    target={linkAddress?.includes('http') ? '_blank' : '_self'}
  >
    <Box
      position="absolute"
      bottom={0}
      left={0}
      width="full"
      height="full"
      bgColor="blackAlpha.300"
      p={4}
    >
      <Flex
        direction="column"
        align="center"
        justify="end"
        height="full"
        textAlign="center"
        pb={{ lg: '6rem' }}
      >
        <Box>
          <Heading
            fontSize={{ base: 'lg', sm: 'xl', lg: '6xl' }}
            color="primary"
            textTransform="uppercase"
            mb={8}
            bg={'dark'}
            px={12}
            py={4}
            fontWeight={'light'}
          >
            {title}
          </Heading>
          {subtitle && (
            <Text
              fontSize={['sm', 'sm', 'lg']}
              fontWeight="bold"
              color="dark"
              bg="primary"
              py={1}
              px={2}
            >
              {subtitle}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  </Link>
);

export default function MultiStoryHero({
  stories = [],
  slideDuration = 4000,
  transitionDuration = 0.3,
  imageSize = 1920,
  imgClassName = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % stories.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [stories.length, slideDuration]);

  if (!stories.length) return null;

  const { title, subtitle, linkTitle, linkAddress } = stories[activeIndex];
  const extractedStory = extractStory(stories[activeIndex]);

  return (
    <Box
      position="relative"
      width="full"
      height={{ base: 'auto', lg: '100vh' }} // Adjust height for mobile
      overflow="hidden"
      bgColor="black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          variants={fadeVariants}
          initial="enter"
          animate="visible"
          exit="exit"
          transition={{ duration: transitionDuration }}
        >
          <Image
            src={`https://res.cloudinary.com/gonation/w_${imageSize}/q_auto/f_auto/${extractedStory?.firstImage?.cloudinaryId}`}
            alt="Current Slide"
            className={imgClassName}
            width="full"
            height="full"
            objectFit="cover"
          />
          <SlideContent
            title={title}
            subtitle={subtitle}
            linkTitle={linkTitle}
            linkAddress={linkAddress}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
