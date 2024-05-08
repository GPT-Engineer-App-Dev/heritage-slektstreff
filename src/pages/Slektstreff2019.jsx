import { Container, Text, VStack } from "@chakra-ui/react";

const Slektstreff2019 = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Slektstreff 2019</Text>
        <Text>Information about the upcoming family reunion in 2019. Date of the post: August 12, 2018.</Text>
      </VStack>
    </Container>
  );
};

export default Slektstreff2019;