import React from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import { Box, Text, Image as ChakraImage, Heading } from '@chakra-ui/react';

const Section = ({ section, parsedSection, countSectionImages, config }) => {
  const sectionClass = slugify(section.name, { lower: true });
  const isHidden = [
    'menu',
    'cocktails menu',
    'desserts menu',
    'specials',
  ].includes(section.name.toLowerCase());

  const sectionStyles = {
    container: {
      py: 8,
      px: [4, 8],
      display: isHidden ? 'none' : 'block',
      maxWidth: 1400,
      mx: 'auto',
      ...config?.container,
    },
    imageContainer: {
      position: 'relative',
      mb: 4,
      ...config?.imageContainer,
    },
    image: {
      h: '96',
      w: '100%',
      objectFit: 'cover',
      borderRadius: 'md',
      ...config?.image,
    },
    imageText: {
      position: 'absolute',
      borderBottomLeftRadius: 'md',
      bottom: 0,
      bg: 'rgb(0,0,0, .6)',
      fontFamily: 'heading',
      px: 4,
      py: 2,
      textTransform: 'uppercase',
      borderRadius: 'tr',
      color: 'white',
      fontSize: 'xs',
      ...config?.imageText,
    },
    heading: {
      size: 'xl',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'dark',
      fontWeight: 'light',
      mb: [4, 4, 0],
      fontFamily: 'ssNickson',
      ...config?.heading,
    },
    description: {
      fontSize: 'xs',
      color: 'dark',
      mb: 8,
      lineHeight: 5,
      textAlign: 'center',
      maxWidth: 600,
      mx: 'auto',
      ...config?.description,
    },
  };

  return (
    <Box
      key={shortid.generate()}
      className={sectionClass}
      {...sectionStyles.container}
    >
      {section.imageIsDefault ? null : (
        <Box {...sectionStyles.imageContainer}>
          <ChakraImage src={section.imageUrl} {...sectionStyles.image} />
          <Box {...sectionStyles.imageText}>{section.name}</Box>
        </Box>
      )}

      <Box>
        {section.name && (
          <Heading {...sectionStyles.heading}>{section.name}</Heading>
        )}
        {section.desc && (
          <Text {...sectionStyles.description}>{section.desc}</Text>
        )}
        <Box display="flex" flexWrap="wrap">
          {parsedSection.childItems.map(({ item }, index) => (
            <MenuItem
              key={shortid.generate()}
              type={'default'}
              item={item}
              isSingleItem={parsedSection.childItems.length === 1}
              menuItemIndex={index}
              sectionImagesCount={countSectionImages(parsedSection.childItems)}
            />
          ))}
        </Box>
      </Box>
      {/* child sections */}
      {parsedSection.childSections.map(childSection => {
        return (
          <Section
            section={childSection.section}
            parsedSection={splitSectionChildren(childSection)}
            countSectionImages={countSectionImages}
            config={config}
          />
        );
      })}
    </Box>
  );
};

export default Section;
