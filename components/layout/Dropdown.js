import slugifyLower from 'helpers/printing/slugifyLower';

const Dropdown = ({ children, isDropdownVisible }) => (
  <Box
    position="absolute"
    left={-10}
    top={12}
    mt={0}
    bg="#041a32"
    shadow="md"
    py={1}
    display={{ base: 'none', md: 'flex' }}
    flexDirection="column"
    alignItems="center"
    width={36}
    opacity={isDropdownVisible ? 1 : 0}
    transition="opacity 0.3s ease-in-out"
  >
    {children.map(child => (
      <Box mb={3}>
        <LinkItem
          key={slugifyLower(child.name)}
          route={child}
          px={4}
          py={2}
          hoverBg="secondary"
          color="white"
          hoverColor="white"
          fontFamily="heading"
          textTransform="uppercase"
        />
      </Box>
    ))}
  </Box>
);

export default Dropdown;
