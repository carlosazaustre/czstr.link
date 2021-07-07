import { Container, Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container>
      <Flex alignItems="center" justifyContent="center">
        <Text>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          &amp;{" "}
          <span role="img" aria-label="code">
            💻
          </span>{" "}
          by <Link href="//carlosazaustre.es">Carlos Azaustre</Link>
        </Text>
      </Flex>
    </Container>
  );
}
