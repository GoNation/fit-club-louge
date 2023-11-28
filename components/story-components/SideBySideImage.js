import React from 'react';
import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';

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
      <ImageComponent
        alt={story.title}
        key={media[0].cloudinaryId}
        img={media[0].cloudinaryId}
        {...imageConfig}
      />,
      <ContentComponent key={1} {...story} {...config} />
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
