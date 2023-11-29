import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import EventItem from './EventItem';

const Events = ({ businessData, singleEvents = [], recurringEvents = [] }) => {
  const allEvents = singleEvents.concat(recurringEvents);

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={4}
      py={32}
      pt={[32, 32, 32, 40]}
      maxW={1200}
      mx={'auto'}
    >
      {allEvents.map(event => (
        <Box key={event._id} p={3} w="full">
          <EventItem event={event} slug={businessData.slug} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Events;
