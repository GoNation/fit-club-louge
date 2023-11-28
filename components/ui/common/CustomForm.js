import {
  Box,
  Input,
  Textarea,
  Button,
  Grid,
  Text,
  Heading,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import NetlifyForm from 'components/contact/NetlifyForm';

const CustomForm = ({
  title = 'Contact Form',
  desc,
  fields,
  formName = 'customForm',
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      py={{ lg: 12 }}
      bg="dark"
      color="white"
    >
      <NetlifyForm name={formName}>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '2xl', lg: 'xl', xl: '4xl' }}
          mb={1}
          textTransform="uppercase"
        >
          {title}
        </Heading>
        <Text mb={4}>{desc}</Text>
        <Grid gap={4} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
          {fields.map((field, index) => {
            switch (field.type) {
              case 'textarea':
                return (
                  <Textarea
                    key={index}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={5}
                    gridColumn="span 2"
                    bg="transparent"
                    color="white"
                    border="1px solid white"
                    borderRadius="md"
                    _focus={{ outline: 'none', borderColor: 'gray.300' }}
                  />
                );
              case 'file':
                return (
                  <InputGroup key={index} gridColumn="span 2">
                    <InputLeftAddon color={'dark'}>{field.name}</InputLeftAddon>
                    <Input type="file" accept=".pdf,.doc,.docx" />
                  </InputGroup>
                );
              default:
                return (
                  <Input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    bg="transparent"
                    color="white"
                    border="1px solid white"
                    borderRadius="md"
                    _focus={{ outline: 'none', borderColor: 'gray.300' }}
                  />
                );
            }
          })}
        </Grid>
        <Button
          type="submit"
          mt={4}
          w="full"
          variant="outline"
          bg="transparent"
          color="white"
          borderRadius="md"
          border={'1px solid white'}
          _hover={{ bg: 'white', color: 'dark' }}
        >
          Submit
        </Button>
      </NetlifyForm>
    </Box>
  );
};

export default CustomForm;
