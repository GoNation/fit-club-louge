import Link from 'next/link';
import { Text } from '@chakra-ui/react';

const LinkItem = ({ route, ...props }) => (
  <Link
    href={route.path || route.url || slugifyLower(route.name) || '#'}
    target={(route.url || route.path).includes('http') ? '_blank' : '_self'}
  >
    <Text as="span" {...props}>
      {route.name}
    </Text>
  </Link>
);

export default LinkItem;
