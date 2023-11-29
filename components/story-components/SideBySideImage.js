import React from 'react';
import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';

import ImageComponent from 'components/ui/ImageComponent';
import ContentComponent from 'components/ContentComponent';

const SideBySideImage = ({ story, config, data }) => {
  const {
    sideBySideImageContainerStyle,
    imageConfig,
    reversed,
    innerContainer,
  } = config;

  const components = [];

  if (data && !story) {
    const { shout } = data;
    const shoutDataConverted = {
      title: shout.title || 'Recent Shout',
      subtitle: `${dayjs(shout.createdAt).format('MMMM DD, YYYY')}`,
      body: shout.text,
    };

    components.push(
      <ImageComponent
        alt={shout.text}
        key={shout.id}
        img={data.shout?.image?.image?.cloudinaryId}
        {...imageConfig}
      />,
      <ContentComponent key={2} {...shoutDataConverted} {...config} />
    );
  } else {
    const { media } = story;

    components.push(
      <Box position={'relative'} overflow={'hidden'} py={[32, 0]}>
        <Box
          position={'absolute'}
          top={[24, 8]}
          right={!reversed || -40}
          left={reversed || -40}
        >
          <Image src="/dots.png" width={400} height={800} />
        </Box>
        <ImageComponent
          alt={story.title}
          key={media[0].cloudinaryId}
          img={media[0].cloudinaryId}
          {...imageConfig}
        />
      </Box>,
      <Box
        bg={'white'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        py={8}
      >
        <Box width={6} height={60} bg={'dark'} />
        <ContentComponent key={1} {...story} {...config} />
        <Box width={6} height={40} bg={'primary'} />
      </Box>
    );
  }

  if (reversed) {
    components.reverse();
  }

  return (
    <Box {...sideBySideImageContainerStyle}>
      <Box {...innerContainer}>{components}</Box>
    </Box>
  );
};

export default SideBySideImage;
