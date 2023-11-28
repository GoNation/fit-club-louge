import { Box, Text, Heading } from '@chakra-ui/react';
import HoursDisplay from 'components/hours/hoursDisplay';

const HoursSection = ({ aboutData }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    p={4}
    textAlign="center"
  >
    <Box
      w="full"
      h="full"
      p={8}
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      fontSize={{ base: 'lg', lg: 'xl' }}
      color="dark"
    >
      <Heading
        as="h4"
        fontSize={{ base: 'xl', md: '3xl', xl: '4xl' }}
        textTransform="uppercase"
      >
        Hours
      </Heading>
      <HoursDisplay {...aboutData} />
    </Box>
  </Box>
);

export default HoursSection;
