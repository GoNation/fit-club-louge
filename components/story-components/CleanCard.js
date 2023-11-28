import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Body from 'components/ui/Body';
import { Box, Heading, Text, LinkOverlay } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import extractStory from 'helpers/extractStory';

const clickableBoxStyles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    shadow: 'md',
    _groupHover: { transform: 'scale(1.10)' },
    height: ['auto'],
    bg: 'black',
    p: 4,
    py: 0,
    // boxShadow: '1px 1px 11px 1px #00FFE4',
    border: '1px solid',
    alignItems: 'flex-start',
    // borderColor: 'secondary',
  },
  imageBox: {
    position: 'relative',
    // height: [300],
  },
  subtitle: {
    as: 'h4',
    fontSize: { base: 'md' },
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'left',
  },
  title: {
    as: 'h2',
    size: 'sm',
    color: 'white',
    mt: 2,
    textTransform: 'uppercase',
    borderBottom: '1px solid',
    borderColor: 'white',
    display: 'inline-block',
    width: 'auto',
    textAlign: 'left',
    mb: 1,
    fontSize: 'xs',
    _hover: {
      borderColor: 'primary',
    },
  },
  body: {
    fontSize: { base: 'md' },
    color: 'white',
    p: {
      color: 'white',
    },
  },
};

const CleanCard = ({ story, noClick, idx, onClick }) => {
  const cloudinaryId = story?.media[0]?.cloudinaryId;
  const linkTitle = story.links ? Object.keys(story.links)[0] || '' : '';
  const linkAddress = story.links ? story.links[linkTitle] : '';
  const { url, title, subtitle, body } = story;
  const { images } = extractStory(story);

  // This padding percentage results in a 9x17 aspect ratio
  const imageWrapperStyles = {
    position: 'relative',
    width: '100%',
    paddingTop: '118.88%', // (17 / 9) * 100 = 188.88%
  };

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  const renderImages = () => {
    return images.length > 1 ? (
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
      >
        {images.map((src, index) => (
          <div key={index} style={imageWrapperStyles}>
            <Image
              src={src}
              alt={title}
              layout="fill"
              objectFit="cover"
              style={imageStyles}
            />
          </div>
        ))}
      </Carousel>
    ) : (
      <div style={imageWrapperStyles}>
        <Image
          src={images[0] || '/card_default.jpg'}
          alt={title}
          layout="fill"
          objectFit="cover"
          style={imageStyles}
        />
      </div>
    );
  };

  const cardContent = (
    <Box {...clickableBoxStyles.card}>
      <Box py={[2]} px="2" display={'flex'} alignItems={'center'}>
        <Box>
          <Image
            src="/5.jpg"
            width={100}
            height={100}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '100%',
            }}
            objectFit="cover"
          ></Image>
        </Box>
        <Box
          flex={1}
          display={'flex'}
          alignItems={'flex-start'}
          flexDir={'column'}
          pl={4}
          onClick={onClick}
          cursor={'pointer'}
        >
          <Heading {...clickableBoxStyles.subtitle}>{title}</Heading>
          <Heading {...clickableBoxStyles.title}>{subtitle}</Heading>

          {/* <Body
            body={body}
            lineHeight={[2, 1.5]}
            {...clickableBoxStyles.body}
          /> */}
        </Box>
      </Box>
      {renderImages()}

      <Box bg={'primary'} width={'100%'} py={4} px={1} fontWeight={'bold'}>
        <Text fontSize={'sm'}>{story.tags[0]}</Text>
      </Box>
    </Box>
  );

  return <>{noClick ? cardContent : cardContent}</>;
};

export default CleanCard;
