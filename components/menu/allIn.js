import React from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import {
  Box,
  Text,
  Button,
  Image as ChakraImage,
  Heading,
} from '@chakra-ui/react';
import Section from './Section';

const AllIn = ({
  menuData,
  setModalActive,
  onBackClick,
  shouldHideFirstSection = true,
}) => {
  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) acc.childItems.push(curr);
        else if ('section' in curr) acc.childSections.push(curr);
        return acc;
      },
      { childItems: [], childSections: [] }
    );
  };

  const countSectionImages = childItems => {
    let count = 0;
    childItems.forEach(({ item }) => {
      if (!item.imageUrl.includes('default')) count++;
    });
    return count;
  };

  return (
    <Box>
      {onBackClick && (
        <Button
          onClick={() => onBackClick()}
          variant="link"
          mb="4"
          fontSize={'sm'}
        >
          ← Back
        </Button>
      )}
      {menuData.inventory.map(section => (
        <Section
          section={section.section}
          parsedSection={splitSectionChildren(section)}
          countSectionImages={countSectionImages}
        />
      ))}
    </Box>
  );
};

export default AllIn;
