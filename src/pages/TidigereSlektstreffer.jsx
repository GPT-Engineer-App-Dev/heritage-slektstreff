import { Container, Text, VStack } from "@chakra-ui/react";

const TidigereSlektstreffer = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Tidigere Slektstreffer</Text>
        <Text>Information about previous family reunions.</Text>
      </VStack>
    </Container>
  );
};

export default TidigereSlektstreffer;