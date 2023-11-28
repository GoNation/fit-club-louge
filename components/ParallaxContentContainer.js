import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const ParallaxContentContainer = ({ story, config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!story) return null;

  const { title, subtitle, body, links, media } = story;

  const linkTitle = Object.keys(links || {})[0];
  const linkAddress = links?.[linkTitle];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % media.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [media]);

  return (
    <Box {...config.container}>
      {media.map((img, index) => (
        <Box
          key={img.cloudinaryId}
          bg={`url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${img.cloudinaryId}) center/cover no-repeat fixed`}
          opacity={currentSlide === index ? 1 : 0}
          transition="opacity 1s"
          zIndex={currentSlide === index ? 1 : 0}
          {...config.image}
        />
      ))}

      <Box {...config.contentBox}>
        {title && <Heading {...config.title}>{title}</Heading>}
        {subtitle && <Heading {...config.subtitle}>{subtitle}</Heading>}
        {body && <Text {...config.body}>{body}</Text>}
        {linkTitle && (
          <Link href={linkAddress} {...config.link}>
            {linkTitle}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ParallaxContentContainer;
