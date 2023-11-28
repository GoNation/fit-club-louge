import { Button, Link } from '@chakra-ui/react';

const HeroContentLink = ({ linkTitle, linkAddress }) => (
  <Link
    href={linkAddress}
    passHref
    style={{ width: '100%', padding: '0 .75rem', boxSizing: 'border-box' }}
  >
    <Button as="a" width="100%" variant={'primary'}>
      {linkTitle}
    </Button>
  </Link>
);

export default HeroContentLink;
