import { Button, Link } from '@chakra-ui/react';

const HeroContentLink = ({ linkTitle, linkAddress }) => (
  <Link
    href={linkAddress}
    style={{ padding: '0 .75rem', boxSizing: 'border-box' }}
  >
    <Button width="100%" variant={'primary'} fontWeight={'bold'}>
      {linkTitle}
    </Button>
  </Link>
);

export default HeroContentLink;
