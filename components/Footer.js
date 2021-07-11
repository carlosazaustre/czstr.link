import { Container, Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container>
      <Flex
        mx="auto"
        d="column"
        align="center"
        justify="center"
        textAlign="center">
        <Text fontSize="sm" color="gray.500">
          Powered by{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          &amp;{" "}
          <span role="img" aria-label="code">
            💻
          </span>{" "}
          by <Link href="//carlosazaustre.es">Carlos Azaustre</Link>
        </Text>
        <Text fontSize="xs" color="gray.500">
          Hosted on <Link href="//vercel.com">Vercel</Link> &{" "}
          <Link href="/zipuc3s">Digital Ocean</Link>
        </Text>
      </Flex>
    </Container>
  );
}
