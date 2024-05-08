import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">Vatn Slektside</Text>
        <Text fontSize="xl">Slektside for etterkommere til Lovise og Peder Vatn, Gården Vatn, Inderøy, Norge</Text>
        <Image src="https://usercontent.one/wp/slekt.vatn.se/wp-content/uploads/2018/08/gardenvatn2005.jpg" alt="Gården Vatn" />
      </VStack>
    </Container>
  );
};

export default Index;