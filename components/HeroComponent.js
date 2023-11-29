import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Shout from 'components/shout/Shout';
import YouTubeEmbed from 'components/YouTubeEmbed';
import Countdown from 'components/events/Countdown';
import extractStory from 'helpers/extractStory';

import HeroImage from './HeroImage';
import BusinessInfo from './BusinessInfo';
import OpacityBG from './ui/OpacityBG';
import HeroContentLink from './HeroContentLink';
import LocalVideo from './LocalVideo';

const HeroComponent = ({ story, business, config, event, shout }) => {
  const {
    heroContainerStyle,
    shoutBoxStyle,
    phoneDirectionsGradientStyle,
    shoutContainer,
    shouldShowPhoneAndDirections,
    shouldShowArrow,
    arrowConfig,
    videoId,
    callToActionVariant,
    heroImageContainer,
    heroImageStyle,
    heroImageContentContainer,
    carouselConfig,
    topGradientStyle,
    businessInfoStyle,
    youtubeEmbedStyle,
    video,
  } = config;

  const renderLocalVideoContent = () => (
    <Box {...heroContainerStyle}>
      <LocalVideo src={video} />
      <Box {...heroImageContentContainer}>
        <Box width={'100%'}>
          <HeroContentLink
            linkTitle={'Buy Tickets'}
            linkAddress={
              'https://web.ctrestaurant.org/events/2023-CRAzies-Awards--895/details'
            }
          />
        </Box>
      </Box>
    </Box>
  );

  const renderArrow = () => (
    <Box {...arrowConfig.wrapper}>
      <Box {...arrowConfig.container}>
        <BsChevronDown
          {...arrowConfig.iconStyle}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        />
      </Box>
    </Box>
  );

  const { title, linkAddress, linkTitle, subtitle } = extractStory(story);
  console.log('extractStory(story)', extractStory(story));

  const renderHeroContent = () => (
    <Box {...heroContainerStyle}>
      {shouldShowPhoneAndDirections && (
        <Box {...phoneDirectionsGradientStyle} />
      )}
      {shouldShowArrow && renderArrow()}
      {shouldShowPhoneAndDirections && (
        <BusinessInfo business={business} config={businessInfoStyle} />
      )}
      <Carousel {...carouselConfig}>
        {story.media.map((mediaItem, idx) => (
          <Box key={`${mediaItem.cloudinaryId}-${idx}`} {...heroImageContainer}>
            <HeroImage
              key={mediaItem.cloudinaryId}
              {...mediaItem}
              {...heroImageStyle}
            />
            <Box {...heroImageContentContainer}>
              <Heading
                color={'white'}
                fontSize={['lg', 'xl', '8xl']}
                textShadow={'0 0 10px rgba(0,0,0,0.5)'}
                as="h1"
                fontWeight={'light'}
              >
                {title}
              </Heading>
              <Heading
                color={'white'}
                fontSize={['lg', 'xl', '5xl']}
                textShadow={'0 0 10px rgba(0,0,0,0.5)'}
                as="h2"
                fontWeight={'bold'}
                mb={8}
              >
                {subtitle}
              </Heading>
              <HeroContentLink
                linkTitle={linkTitle}
                linkAddress={linkAddress}
              />
            </Box>
          </Box>
        ))}
      </Carousel>
      <Box {...topGradientStyle}></Box>
      <OpacityBG strength="opacity-20"></OpacityBG>
    </Box>
  );

  const renderContent = () => {
    if (videoId?.length) {
      return renderYouTubeEmbedContent();
    } else if (video) {
      return renderLocalVideoContent();
    } else {
      return renderHeroContent();
    }
  };

  if (!story) return null;

  const renderYouTubeEmbedContent = () => {
    const extractedStory = extractStory(story);
    return (
      <Box {...heroContainerStyle}>
        <YouTubeEmbed videoId={videoId} />
        <YouTubeEmbedContent
          story={extractedStory}
          callToActionVariant={callToActionVariant}
          config={youtubeEmbedStyle}
        />
      </Box>
    );
  };

  const renderCountdown = () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom={0}
      top={0}
      left={0}
      zIndex={9}
      width="100%"
      flexDir="column"
    >
      <Countdown targetDate={event.starts} onCompleteMessage="Happening Now!" />
      <Box {...shoutContainer}>
        <Shout data={shout} width={[400, 500]} />
      </Box>
    </Box>
  );

  if (videoId?.length) return renderYouTubeEmbedContent();
  if (!story) return null;

  return (
    <Box position={'relative'}>
      {renderContent()}
      {event?.starts && renderCountdown()}
      {shouldShowArrow && renderArrow()}
      {shouldShowPhoneAndDirections && (
        <Box {...phoneDirectionsGradientStyle} />
      )}
      {shouldShowPhoneAndDirections && (
        <BusinessInfo business={business} config={businessInfoStyle} />
      )}
      <Box {...topGradientStyle}></Box>
      <OpacityBG strength="opacity-20"></OpacityBG>
    </Box>
  );
};

export default HeroComponent;
