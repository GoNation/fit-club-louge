import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Price = ({ variants, withDollar }) => {
  const renderPrices = () => {
    const styles = {
      labelTitle: {
        textTransform: 'uppercase',
        fontFamily: 'accent',
        fontSize: 'sm',
      },
      label: {
        textTransform: 'uppercase',
        mr: 2,
        fontSize: 'sm',
        fontWeight: 'bold',
        color: '#152738',
        fontFamily: 'accent',
      },
      price: {
        fontSize: 'sm',
        fontWeight: 'bold',
        fontFamily: 'accent',
      },
    };

    return variants.map((variant, index) => (
      <Box key={index}>
        {variant.labelTitle && (
          <Text {...styles.labelTitle}>{variant.labelTitle}</Text>
        )}
        <Box display="flex" alignItems="center">
          <Text {...styles.label}>{variant.label}</Text>
          <Text {...styles.price}>
            {withDollar ? '$' : ''}
            {variant.price}
          </Text>
        </Box>
      </Box>
    ));
  };

  return <Box>{renderPrices()}</Box>;
};

export default Price;
