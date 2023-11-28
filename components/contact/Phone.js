import { Text } from '@chakra-ui/react';
import React from 'react';
Text;

const Phone = ({ phone, children, ...props }) => {
  if (!phone) return null;
  return (
    <Text as="a" {...props} href={`tel:${phone}`}>
      {children || phone}
    </Text>
  );
};

export default Phone;
