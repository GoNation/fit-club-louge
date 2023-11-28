import { Box } from '@chakra-ui/react';
import DetailsBox from 'components/contact/DetailsBox';
import { iframe } from 'config';

const MapSection = ({ aboutData }) => (
  <Box
    position="relative"
    w="full"
    h={{ base: '500px', md: '600px', lg: '700px' }}
    colSpan={{ md: 2 }}
  >
    <Box dangerouslySetInnerHTML={{ __html: iframe }} w="full" h="full" />
    <Box position="absolute" top={0} left={0}>
      <DetailsBox aboutData={aboutData} title={aboutData.name} />
    </Box>
  </Box>
);

export default MapSection;
