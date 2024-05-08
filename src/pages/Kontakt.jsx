import { Container, Text, VStack, Input, Button } from "@chakra-ui/react";

const Kontakt = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Kontakt</Text>
        <Text>Contact information and a form to send emails directly.</Text>
        <Input placeholder="Your email" size="md" />
        <Input placeholder="Your message" size="md" />
        <Button colorScheme="blue">Send</Button>
      </VStack>
    </Container>
  );
};

export default Kontakt;