import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import Body from './ui/Body';

const ContentComponent = ({
  title,
  subtitle,
  body,
  links = {},
  contentConfig,
  multiFontConfig,
}) => {
  const {
    containerStyle,
    titleStyle,
    subtitleStyle,
    bodyContainerStyle,
    showStar,
  } = contentConfig;

  // Split the title into an array of words
  const titleWords = title ? title.split(' ') : [];
  const firstWord = titleWords[0] || '';
  const remainingWords = titleWords.slice(1).join(' ');

  const renderCta = () => {
    if (
      !links ||
      typeof links !== 'object' ||
      Object.keys(links).length === 0
    ) {
      return null;
    }

    const label = Object.keys(links)[0];
    const url = links[label];

    if (!url) {
      console.error('URL is not defined for label:', label);
      return null;
    }

    return (
      <Link
        href={url}
        target={url.startsWith('http') ? '_blank' : '_self'} // Checking if the URL starts with 'http'
        rel="noopener noreferrer"
      >
        <Button variant="primary">{label}</Button>
      </Link>
    );
  };

  return (
    <Box {...containerStyle}>
      {multiFontConfig.active ? (
        <Box position="relative">
          <Heading
            as="span"
            fontFamily="accent"
            color="accent"
            position="absolute"
            top="-2"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="8xl"
            zIndex={0}
            fontWeight={400}
          >
            {firstWord}
          </Heading>
          <Heading {...titleStyle}>{remainingWords}</Heading>
        </Box>
      ) : (
        title && <Heading {...titleStyle}>{title}</Heading>
      )}
      {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
      {showStar && (
        <Text color="gray.500" fontSize="3xl" textAlign="center" my={4}>
          *
        </Text>
      )}
      {body && <Body {...bodyContainerStyle} body={body} />}
      <Box textAlign={'center'}>{renderCta()}</Box>
    </Box>
  );
};

export default ContentComponent;
