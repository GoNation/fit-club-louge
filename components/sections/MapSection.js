import { Box } from '@chakra-ui/react';
import DetailsBox from 'components/contact/DetailsBox';
// todo will need to bring this back!
// import { iframe } from 'config';

const MapSection = ({ aboutData, iframeURL }) => {
  const iframe = `<iframe src="${iframeURL}"  style="width: 100%; height: 100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  console.log('iframe: ', iframe);

  return (
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
};

export default MapSection;
