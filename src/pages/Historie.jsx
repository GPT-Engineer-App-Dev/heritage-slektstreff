import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Historie = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Historie</Text>
        <Text>Historical information about the family.</Text>
        <Image src="http://slekt.vatn.se/wp-content/uploads/2018/08/lovise_og_peder.jpg" alt="Lovise and Peder Vatn" />
      </VStack>
    </Container>
  );
};

export default Historie;