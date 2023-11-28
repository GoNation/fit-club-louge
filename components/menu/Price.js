import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Price = ({ variants, withDollar }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const styles = {
    label: {
      fontSize: 'sm',
      fontWeight: 'bold',
      color: '#152738',
      fontFamily: 'acent',
    },
    price: {
      fontSize: 'md',
      fontWeight: 'bold',
      color: '#152738',
      textAlign: 'right',
      ml: 2,
      fontFamily: 'accent',
    },
  };

  return (
    <Box display="flex" alignItems="center">
      {variants[0]?.labelTitle && (
        <Text {...styles.label}>{variants[0].labelTitle}</Text>
      )}
      {variants[0]?.label && <Text {...styles.label}>{variants[0].label}</Text>}
      <Text {...styles.price}>
        {withDollar && variants[0]?.price ? '$' : ''}
        {variants[0]?.price}
      </Text>
    </Box>
  );
};

export default Price;
